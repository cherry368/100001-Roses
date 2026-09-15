import * as THREE from "three";

// ═══════════════════════════════════════════════════════════
//  ROSE FIELD — InstancedMesh manager for 100,001 roses
//  Handles instancing, LOD, raycasting, position interpolation
//  between bouquet and heart formations
//
//  Page 4 cinematic version:
//  - slow, smooth bouquet → heart morph
//  - subtle floating motion while roses travel
//  - gentle breathing once the heart is formed
//  - tiny scale shimmer for depth/life
//  - highlighted roses remain supported
// ═══════════════════════════════════════════════════════════

import { createRoseGeometry } from "./RoseModel";
import {
  generateBouquetPositions,
  type RoseData,
} from "./BouquetGenerator";
import { config } from "../config/birthday";
import type { QualityLevel } from "../types";

export class RoseField {
  mesh: THREE.InstancedMesh;
  geometry: THREE.BufferGeometry;
  material: THREE.MeshStandardMaterial;
  roseData: RoseData;
  count: number;

  // =========================================================
  // Bouquet → Heart cinematic animation
  // =========================================================

  private morphProgress = 0;
  private morphTarget = 0;

  // Smooth morph velocity for eased movement.
  private morphVelocity = 0;

  // Time values used for subtle animation.
  private heartPulse = 0;
  private floatTime = 0;
  private sparkleTime = 0;

  // Highlight state.
  private highlightedId = -1;
  private originalScale = new Map<number, number>();

  // Temporary objects for matrix updates.
  private dummy = new THREE.Object3D();
  private tmpColor = new THREE.Color();

  // Quality settings.
  private quality: QualityLevel;

  constructor(count: number, quality: QualityLevel) {
    this.count = count;
    this.quality = quality;

    // Generate geometry and data.
    this.geometry = createRoseGeometry();
    this.roseData = generateBouquetPositions(count);

    // Create instanced material with vertex colors.
    this.material = new THREE.MeshStandardMaterial({
      vertexColors: false,
      roughness: 0.65,
      metalness: 0.1,
      flatShading: true,
    });

    // Create InstancedMesh.
    this.mesh = new THREE.InstancedMesh(
      this.geometry,
      this.material,
      count
    );

    this.mesh.instanceMatrix.setUsage(
      THREE.DynamicDrawUsage
    );

    this.mesh.frustumCulled = false;
    this.mesh.castShadow = false;
    this.mesh.receiveShadow = false;

    // Set up instance colors.
    const instanceColors = new Float32Array(
      count * 3
    );

    for (let i = 0; i < count; i++) {
      instanceColors[i * 3] =
        this.roseData.colors[i * 3];

      instanceColors[i * 3 + 1] =
        this.roseData.colors[i * 3 + 1];

      instanceColors[i * 3 + 2] =
        this.roseData.colors[i * 3 + 2];
    }

    this.mesh.instanceColor =
      new THREE.InstancedBufferAttribute(
        instanceColors,
        3
      );

    this.mesh.instanceColor.setUsage(
      THREE.DynamicDrawUsage
    );

    // Apply initial transforms.
    this.updateAllInstances();
  }

  // =========================================================
  // Update every rose
  // =========================================================

  updateAllInstances(): void {
    const {
      positions,
      heartPositions,
      rotations,
      scales,
    } = this.roseData;

    const p = THREE.MathUtils.clamp(
      this.morphProgress,
      0,
      1
    );

    // Smoothstep gives a softer cinematic start/end.
    const sp = THREE.MathUtils.smoothstep(
      p,
      0,
      1
    );

    for (let i = 0; i < this.count; i++) {
      // -----------------------------------------------------
      // Bouquet position
      // -----------------------------------------------------

      const bx = positions[i * 3];
      const by = positions[i * 3 + 1];
      const bz = positions[i * 3 + 2];

      // -----------------------------------------------------
      // Heart position
      // -----------------------------------------------------

      const hx = heartPositions[i * 3];
      const hy = heartPositions[i * 3 + 1];
      const hz = heartPositions[i * 3 + 2];

      // -----------------------------------------------------
      // Position interpolation
      // -----------------------------------------------------

      this.dummy.position.set(
        bx + (hx - bx) * sp,
        by + (hy - by) * sp,
        bz + (hz - bz) * sp
      );

      // -----------------------------------------------------
      // Subtle floating movement while travelling.
      //
      // This becomes almost zero after the heart is formed,
      // so the heart itself stays clean.
      // -----------------------------------------------------

      const travelAmount = 1 - sp;

      const floatX =
        Math.sin(
          this.floatTime * 1.15 +
            i * 0.071
        ) * 0.045;

      const floatY =
        Math.sin(
          this.floatTime * 1.45 +
            i * 0.113
        ) * 0.075;

      const floatZ =
        Math.cos(
          this.floatTime * 0.92 +
            i * 0.097
        ) * 0.055;

      this.dummy.position.x +=
        floatX * travelAmount;

      this.dummy.position.y +=
        floatY * travelAmount;

      this.dummy.position.z +=
        floatZ * travelAmount;

      // -----------------------------------------------------
      // Gentle rotation while moving.
      // Keep the original rose orientation as the base.
      // -----------------------------------------------------

      const rx = rotations[i * 3];
      const ry = rotations[i * 3 + 1];
      const rz = rotations[i * 3 + 2];

      this.dummy.rotation.set(
        rx +
          Math.sin(
            this.floatTime * 0.8 +
              i * 0.13
          ) *
            0.06 *
            travelAmount,

        ry +
          this.floatTime * 0.055 +
          i * 0.001,

        rz +
          Math.cos(
            this.floatTime * 0.7 +
              i * 0.17
          ) *
            0.05 *
            travelAmount
      );

      // -----------------------------------------------------
      // Base scale
      // -----------------------------------------------------

      let scale = scales[i];

      // Highlighted rose gets a boost.
      if (i === this.highlightedId) {
        scale *= 1.5;
      }

      // -----------------------------------------------------
      // Very subtle shimmer.
      //
      // Do not make this strong — the effect should feel
      // like living roses rather than flashing particles.
      // -----------------------------------------------------

      const shimmer =
        0.985 +
        Math.sin(
          this.sparkleTime * 1.7 +
            i * 0.037
        ) *
          0.015;

      scale *= shimmer;

      // -----------------------------------------------------
      // Gentle heart breathing after formation.
      // -----------------------------------------------------

      if (sp > 0.96) {
        const heartAmount =
          THREE.MathUtils.smoothstep(
            sp,
            0.96,
            1
          );

        const pulse =
          1 +
          Math.sin(
            this.heartPulse * 2.6
          ) *
            0.012 *
            heartAmount;

        scale *= pulse;
      }

      this.dummy.scale.setScalar(scale);

      this.dummy.updateMatrix();

      this.mesh.setMatrixAt(
        i,
        this.dummy.matrix
      );
    }

    this.mesh.instanceMatrix.needsUpdate = true;

    if (this.mesh.instanceColor) {
      this.mesh.instanceColor.needsUpdate =
        true;
    }
  }

  // =========================================================
  // MORPH TARGET
  // =========================================================

  setMorphTarget(target: number): void {
    this.morphTarget =
      THREE.MathUtils.clamp(
        target,
        0,
        1
      );
  }

  getMorphProgress(): number {
    return this.morphProgress;
  }

  // =========================================================
  // Called every frame
  // =========================================================

  update(delta: number): void {
    // Protect against unusual frame times.
    const dt = Math.min(
      Math.max(delta, 0),
      0.05
    );

    this.floatTime += dt;
    this.sparkleTime += dt;

    // -------------------------------------------------------
    // Smooth cinematic morph
    // -------------------------------------------------------

    const distance =
      this.morphTarget -
      this.morphProgress;

    /*
     * Spring-like movement.
     *
     * This is intentionally slower than a normal UI
     * transition so the heart formation feels like the
     * roses are physically travelling into place.
     */
    this.morphVelocity +=
      distance * dt * 1.15;

    this.morphVelocity *= Math.pow(
      0.91,
      dt * 60
    );

    this.morphProgress +=
      this.morphVelocity *
      dt *
      3.5;

    // Prevent tiny oscillations around the target.
    if (
      Math.abs(
        this.morphTarget -
          this.morphProgress
      ) < 0.0008 &&
      Math.abs(this.morphVelocity) <
        0.0008
    ) {
      this.morphProgress =
        this.morphTarget;

      this.morphVelocity = 0;
    }

    this.morphProgress =
      THREE.MathUtils.clamp(
        this.morphProgress,
        0,
        1
      );

    // Heart pulse clock.
    if (
      this.morphProgress > 0.94
    ) {
      this.heartPulse += dt;
    }

    /*
     * Update every frame, not only while morphing,
     * because the subtle floating/shimmer animation
     * continues during the cinematic reveal.
     */
    this.updateAllInstances();

    // -------------------------------------------------------
    // Highlighted rose
    // -------------------------------------------------------
    //
    // Highlight scaling is already handled by
    // updateAllInstances(), so there is no second matrix
    // write here. This prevents the highlighted rose from
    // accidentally overwriting the cinematic animation.
  }

  // =========================================================
  // Highlight a specific rose by instance index
  // =========================================================

  highlightRose(instanceId: number): void {
    if (
      instanceId < 0 ||
      instanceId >= this.count
    ) {
      return;
    }

    this.highlightedId = instanceId;

    this.updateAllInstances();
  }

  clearHighlight(): void {
    this.highlightedId = -1;

    this.updateAllInstances();
  }

  // =========================================================
  // Get current world position of a rose
  // =========================================================

  getRosePosition(
    instanceId: number,
    out: THREE.Vector3
  ): void {
    if (
      instanceId < 0 ||
      instanceId >= this.count
    ) {
      out.set(0, 0, 0);
      return;
    }

    const {
      positions,
      heartPositions,
    } = this.roseData;

    const p =
      THREE.MathUtils.clamp(
        this.morphProgress,
        0,
        1
      );

    const sp =
      THREE.MathUtils.smoothstep(
        p,
        0,
        1
      );

    out.set(
      positions[instanceId * 3] +
        (
          heartPositions[
            instanceId * 3
          ] -
          positions[
            instanceId * 3
          ]
        ) *
          sp,

      positions[
        instanceId * 3 + 1
      ] +
        (
          heartPositions[
            instanceId * 3 + 1
          ] -
          positions[
            instanceId * 3 + 1
          ]
        ) *
          sp,

      positions[
        instanceId * 3 + 2
      ] +
        (
          heartPositions[
            instanceId * 3 + 2
          ] -
          positions[
            instanceId * 3 + 2
          ]
        ) *
          sp
    );
  }

  // =========================================================
  // Rose number helpers
  // =========================================================

  // instanceId is 0-based, rose number is 1-based.
  static instanceIdToRoseNumber(
    instanceId: number
  ): number {
    return instanceId + 1;
  }

  // Rose number is 1-based, instanceId is 0-based.
  static roseNumberToInstanceId(
    roseNumber: number
  ): number {
    return roseNumber - 1;
  }

  // =========================================================
  // Dispose
  // =========================================================

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
    this.mesh.dispose();

    this.originalScale.clear();
  }
}
