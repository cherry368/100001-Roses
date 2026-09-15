import * as THREE from "three";

// ═══════════════════════════════════════════════════════════
//  CAMERA CONTROLLER — Cinematic camera with inertia
//  Handles orbit, zoom, pan, and scripted camera movements
// ═══════════════════════════════════════════════════════════

export class CameraController {
  camera: THREE.PerspectiveCamera;
  private target: THREE.Vector3;
  private desiredPos: THREE.Vector3;
  private desiredTarget: THREE.Vector3;
  private lerpSpeed = 2;
  private orbitEnabled = false;

  // Orbit state
  private azimuth = 0;
  private polar = Math.PI / 2;
  private radius = 35;
  private orbitTarget = new THREE.Vector3(0, 5, 0);
  private minRadius = 5;
  private maxRadius = 80;

  // Inertia
  private velAzimuth = 0;
  private velPolar = 0;
  private velRadius = 0;
  private damping = 0.92;

  // Sway
  private swayTime = 0;
  private swayAmount = 0.3;

  // Auto-rotate
  private autoRotate = false;
  private autoRotateSpeed = 0.1;

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(55, aspect, 0.1, 500);
    this.target = new THREE.Vector3(0, 5, 0);
    this.desiredPos = new THREE.Vector3(0, 10, 40);
    this.desiredTarget = new THREE.Vector3(0, 5, 0);
    this.camera.position.copy(this.desiredPos);
    this.camera.lookAt(this.target);
  }

  setAspect(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  // Set camera position directly (for scripted moves)
  setPosition(pos: THREE.Vector3, target: THREE.Vector3, speed = 2): void {
    this.desiredPos.copy(pos);
    this.desiredTarget.copy(target);
    this.lerpSpeed = speed;
    this.orbitEnabled = false;
  }

  // Enable orbit controls for exploration
  enableOrbit(
    center: THREE.Vector3,
    radius: number,
    initialAzimuth = Math.PI / 2,
    initialPolar = Math.PI / 2
  ): void {
    this.orbitEnabled = true;
    this.orbitTarget.copy(center);
    this.radius = radius;
    // Front view: camera starts on +Z looking toward the heart.
    this.azimuth = initialAzimuth;
    this.polar = initialPolar;
    this.updateOrbitPosition();
  }


  // Recenter the current orbit without disabling interaction.
  resetOrbit(radius = 34, center?: THREE.Vector3): void {
    if (center) this.orbitTarget.copy(center);
    this.radius = THREE.MathUtils.clamp(radius, this.minRadius, this.maxRadius);
    // Reset to the same +Z front view used for the initial heart view.
    this.azimuth = Math.PI / 2;
    this.polar = Math.PI / 2;
    this.velAzimuth = 0;
    this.velPolar = 0;
    this.velRadius = 0;
    this.orbitEnabled = true;
    this.updateOrbitPosition();
  }

  focusOrbitTarget(point: THREE.Vector3, radius?: number): void {
    this.orbitTarget.copy(point);
    if (radius !== undefined) {
      this.radius = THREE.MathUtils.clamp(radius, this.minRadius, this.maxRadius);
    }
    this.velAzimuth = 0;
    this.velPolar = 0;
    this.velRadius = 0;
    this.orbitEnabled = true;
    this.updateOrbitPosition();
  }

  isOrbitEnabled(): boolean {
    return this.orbitEnabled;
  }

  setAutoRotate(enabled: boolean): void {
    this.autoRotate = enabled;
  }

  // Input handlers for orbit
  onDrag(dx: number, dy: number): void {
    if (!this.orbitEnabled) return;
    this.velAzimuth -= dx * 0.005;
    this.velPolar -= dy * 0.005;
  }

  onZoom(delta: number): void {
    if (!this.orbitEnabled) return;
    this.velRadius += delta * 0.02;
  }

  setZoomLimits(min: number, max: number): void {
    this.minRadius = min;
    this.maxRadius = max;
  }

  getZoomLevel(): number {
    // Returns 0 (far) to 1 (close)
    return 1 - (this.radius - this.minRadius) / (this.maxRadius - this.minRadius);
  }

  getRadius(): number {
    return this.radius;
  }

  private updateOrbitPosition(): void {
    this.polar = THREE.MathUtils.clamp(this.polar, 0.3, Math.PI - 0.3);
    this.radius = THREE.MathUtils.clamp(this.radius, this.minRadius, this.maxRadius);

    const x = this.orbitTarget.x + this.radius * Math.sin(this.polar) * Math.cos(this.azimuth);
    const y = this.orbitTarget.y + this.radius * Math.cos(this.polar);
    const z = this.orbitTarget.z + this.radius * Math.sin(this.polar) * Math.sin(this.azimuth);

    this.camera.position.set(x, y, z);
    this.camera.lookAt(this.orbitTarget);
  }

  update(delta: number): void {
    if (this.orbitEnabled) {
      // Apply inertia
      this.azimuth += this.velAzimuth;
      this.polar += this.velPolar;
      this.radius += this.velRadius;

      this.velAzimuth *= this.damping;
      this.velPolar *= this.damping;
      this.velRadius *= this.damping;

      // Auto-rotate
      if (this.autoRotate && Math.abs(this.velAzimuth) < 0.001) {
        this.azimuth += this.autoRotateSpeed * delta;
      }

      this.updateOrbitPosition();
    } else {
      // Scripted camera with smooth lerp
      this.camera.position.lerp(this.desiredPos, Math.min(1, delta * this.lerpSpeed));
      this.target.lerp(this.desiredTarget, Math.min(1, delta * this.lerpSpeed));
      this.camera.lookAt(this.target);
    }

    // Add subtle sway
    this.swayTime += delta;
    if (!this.orbitEnabled) {
      const swayX = Math.sin(this.swayTime * 0.5) * this.swayAmount;
      const swayY = Math.cos(this.swayTime * 0.3) * this.swayAmount * 0.5;
      this.camera.position.x += swayX;
      this.camera.position.y += swayY;
    }
  }

  setSway(amount: number): void {
    this.swayAmount = amount;
  }

  dispose(): void {}
}
