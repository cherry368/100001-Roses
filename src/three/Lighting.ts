import * as THREE from "three";
import type { QualityLevel } from "../types";
import { gsap } from "gsap";

// ═══════════════════════════════════════════════════════════
//  LIGHTING — Scene lighting for garden, gates, bouquet, heart
//  Adjusts based on quality level
// ═══════════════════════════════════════════════════════════

export class Lighting {
  group: THREE.Group;
  ambient: THREE.AmbientLight;
  directional: THREE.DirectionalLight;
  point1: THREE.PointLight;
  point2: THREE.PointLight;
  hemi: THREE.HemisphereLight;
  private quality: QualityLevel;

  constructor(quality: QualityLevel) {
    this.quality = quality;
    this.group = new THREE.Group();

    // Warm ambient
    this.ambient = new THREE.AmbientLight(0xff8866, 0.4);
    this.group.add(this.ambient);

    // Hemisphere for sky/ground gradient
    this.hemi = new THREE.HemisphereLight(0xff9966, 0x331144, 0.5);
    this.group.add(this.hemi);

    // Main directional (sunset)
    this.directional = new THREE.DirectionalLight(0xffaa77, 0.8);
    this.directional.position.set(20, 30, 10);
    if (quality !== "LOW") {
      this.directional.castShadow = true;
      this.directional.shadow.mapSize.set(512, 512);
      this.directional.shadow.camera.near = 1;
      this.directional.shadow.camera.far = 100;
    }
    this.group.add(this.directional);

    // Warm point light (gate area)
    this.point1 = new THREE.PointLight(0xffd700, 2, 50, 1.5);
    this.point1.position.set(0, 8, -15);
    this.group.add(this.point1);

    // Pink fill light
    this.point2 = new THREE.PointLight(0xff3b8d, 1.5, 40, 2);
    this.point2.position.set(-10, 5, 10);
    this.group.add(this.point2);
  }

  setMood(mood: "garden" | "gate" | "bouquet" | "heart"): void {
    const tl = gsap.timeline();
    // We use GSAP externally, but for simplicity we animate manually
    switch (mood) {
      case "garden":
        this.ambient.intensity = 0.4;
        this.directional.intensity = 0.8;
        this.point1.intensity = 2;
        this.point2.intensity = 1.5;
        break;
      case "gate":
        this.ambient.intensity = 0.25;
        this.directional.intensity = 0.5;
        this.point1.intensity = 4;
        this.point2.intensity = 1;
        break;
      case "bouquet":
        this.ambient.intensity = 0.5;
        this.directional.intensity = 1;
        this.point1.intensity = 3;
        this.point2.intensity = 2;
        break;
      case "heart":
        this.ambient.intensity = 0.35;
        this.directional.intensity = 0.6;
        this.point1.intensity = 2.5;
        this.point2.intensity = 2;
        break;
    }
  }

  dispose(): void {
    this.group.clear();
  }
}

// Minimal tween stub (we use GSAP from React side for real animation)
class TweenLiteLite {
  constructor(obj: any, dur: number, props: any) {}
}
