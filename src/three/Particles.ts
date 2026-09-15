import * as THREE from "three";
import type { QualityLevel } from "../types";

// ═══════════════════════════════════════════════════════════
//  PARTICLES — Floating petals, fireflies, glowing dust
//  Uses Points for efficient particle rendering
// ═══════════════════════════════════════════════════════════

export class Particles {
  group: THREE.Group;
  private petals: THREE.Points;
  private fireflies: THREE.Points;
  private dust: THREE.Points;
  private quality: QualityLevel;
  private petalVelocities: Float32Array;
  private fireflyData: Float32Array;
  private time = 0;

  constructor(quality: QualityLevel) {
    this.quality = quality;
    this.group = new THREE.Group();

    const petalCount = quality === "LOW" ? 80 : quality === "MEDIUM" ? 200 : 400;
    const fireflyCount = quality === "LOW" ? 40 : quality === "MEDIUM" ? 100 : 200;
    const dustCount = quality === "LOW" ? 200 : quality === "MEDIUM" ? 500 : 1000;

    // --- Petals ---
    this.petals = this.createPetals(petalCount);
    this.petalVelocities = new Float32Array(petalCount * 3);
    for (let i = 0; i < petalCount; i++) {
      this.petalVelocities[i * 3] = (Math.random() - 0.5) * 0.5;
      this.petalVelocities[i * 3 + 1] = -Math.random() * 0.3 - 0.1;
      this.petalVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    this.group.add(this.petals);

    // --- Fireflies ---
    this.fireflies = this.createFireflies(fireflyCount);
    this.fireflyData = new Float32Array(fireflyCount * 3); // base position
    const fpos = this.fireflies.geometry.attributes.position;
    for (let i = 0; i < fireflyCount; i++) {
      this.fireflyData[i * 3] = fpos.getX(i);
      this.fireflyData[i * 3 + 1] = fpos.getY(i);
      this.fireflyData[i * 3 + 2] = fpos.getZ(i);
    }
    this.group.add(this.fireflies);

    // --- Dust ---
    this.dust = this.createDust(dustCount);
    this.group.add(this.dust);
  }

  private createPetals(count: number): THREE.Points {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = Math.random() * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const c = Math.random();
      colors[i * 3] = 0.9 + c * 0.1;
      colors[i * 3 + 1] = 0.2 + c * 0.3;
      colors[i * 3 + 2] = 0.4 + c * 0.3;

      sizes[i] = 0.15 + Math.random() * 0.2;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    return new THREE.Points(geo, mat);
  }

  private createFireflies(count: number): THREE.Points {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = Math.random() * 25 + 1;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      colors[i * 3] = 1;
      colors[i * 3 + 1] = 0.85 + Math.random() * 0.15;
      colors[i * 3 + 2] = 0.3 + Math.random() * 0.3;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    return new THREE.Points(geo, mat);
  }

  private createDust(count: number): THREE.Points {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = Math.random() * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xffddaa,
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    return new THREE.Points(geo, mat);
  }

  update(delta: number): void {
    this.time += delta;

    // Animate petals — falling + drifting
    const pPos = this.petals.geometry.attributes.position;
    for (let i = 0; i < pPos.count; i++) {
      let x = pPos.getX(i);
      let y = pPos.getY(i);
      let z = pPos.getZ(i);

      x += this.petalVelocities[i * 3] * delta + Math.sin(this.time + i) * 0.02;
      y += this.petalVelocities[i * 3 + 1] * delta;
      z += this.petalVelocities[i * 3 + 2] * delta + Math.cos(this.time + i) * 0.02;

      // Reset if below ground
      if (y < -2) {
        y = 35 + Math.random() * 5;
        x = (Math.random() - 0.5) * 80;
        z = (Math.random() - 0.5) * 80;
      }

      pPos.setXYZ(i, x, y, z);
    }
    pPos.needsUpdate = true;

    // Animate fireflies — gentle floating with pulsing
    const fPos = this.fireflies.geometry.attributes.position;
    for (let i = 0; i < fPos.count; i++) {
      const bx = this.fireflyData[i * 3];
      const by = this.fireflyData[i * 3 + 1];
      const bz = this.fireflyData[i * 3 + 2];
      fPos.setXYZ(
        i,
        bx + Math.sin(this.time * 0.5 + i * 0.7) * 2,
        by + Math.cos(this.time * 0.3 + i * 0.5) * 1.5,
        bz + Math.sin(this.time * 0.4 + i * 0.3) * 2
      );
    }
    fPos.needsUpdate = true;

    // Pulse firefly opacity
    (this.fireflies.material as THREE.PointsMaterial).opacity =
      0.6 + Math.sin(this.time * 2) * 0.3;
  }

  setIntensity(multiplier: number): void {
    (this.petals.material as THREE.PointsMaterial).opacity = 0.7 * multiplier;
    (this.fireflies.material as THREE.PointsMaterial).opacity = 0.9 * multiplier;
    (this.dust.material as THREE.PointsMaterial).opacity = 0.3 * multiplier;
  }

  dispose(): void {
    this.petals.geometry.dispose();
    (this.petals.material as THREE.Material).dispose();
    this.fireflies.geometry.dispose();
    (this.fireflies.material as THREE.Material).dispose();
    this.dust.geometry.dispose();
    (this.dust.material as THREE.Material).dispose();
  }
}
