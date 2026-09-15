import * as THREE from "three";
import { CameraController } from "./CameraController";
import { RoseField } from "./RoseField";
import { Lighting } from "./Lighting";
import { Particles } from "./Particles";
import { Gate } from "./Gate";
import { config } from "../config/birthday";
import type { ExperienceEvent, ExperienceEventHandler, QualityLevel, SceneState } from "../types";

// ═══════════════════════════════════════════════════════════
//  EXPERIENCE — Main Three.js orchestrator
//  Manages the renderer, scene, and all 3D objects
//  Drives the cinematic camera movements and scene transitions
//  Emits events back to React for UI updates
// ═══════════════════════════════════════════════════════════

export class Experience {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  cameraController: CameraController;
  lighting: Lighting;
  particles: Particles;
  gate: Gate;
  roseField: RoseField | null = null;

  private clock = new THREE.Clock();
  private quality: QualityLevel;
  private state: SceneState = "LOADING";
  private eventHandler: ExperienceEventHandler | null = null;

  // Raycaster for rose selection
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();

  // Input state
  private isDragging = false;
  private lastPointerX = 0;
  private lastPointerY = 0;
  private lastPinchDist = 0;
  private pointerDownX = 0;
  private pointerDownY = 0;
  private pointerMoved = false;

  // Sky
  private skyMesh: THREE.Mesh | null = null;

  // State flags
  private gateApproachProgress = 0;
  private gateOpeningProgress = 0;
  private bouquetRevealProgress = 0;
  private heartMorphTimer: number | null = null;
  private heartInteractionTimer: number | null = null;
  private heartInteractionReady = false;
  private heartFormedEmitted = false;

  // Callback for zoom level changes
  private lastZoomLevel = -1;

  // Resize observer
  private resizeObserver: ResizeObserver | null = null;

  constructor(container: HTMLElement, quality: QualityLevel) {
    this.quality = quality;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: quality !== "LOW",
      powerPreference: "high-performance",
      alpha: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, quality === "LOW" ? 1 : quality === "MEDIUM" ? 1.5 : 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);

    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x2a1040, 0.008);

    // Camera
    this.cameraController = new CameraController(container.clientWidth / container.clientHeight);

    // Lighting
    this.lighting = new Lighting(quality);
    this.scene.add(this.lighting.group);

    // Particles
    this.particles = new Particles(quality);
    this.scene.add(this.particles.group);

    // Gate
    this.gate = new Gate();
    this.gate.group.position.set(0, 0, -20);
    this.gate.group.visible = false;
    this.scene.add(this.gate.group);

    // Sky dome
    this.createSky();

    // Ground
    this.createGround();

    // Setup input
    this.setupInput(container);

    // Resize
    this.resizeObserver = new ResizeObserver(() => this.onResize(container));
    this.resizeObserver.observe(container);

    // Start render loop
    this.animate();
  }

  private createSky(): void {
    const skyGeo = new THREE.SphereGeometry(250, 16, 8);
    const skyMat = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x1a0a2e) },
        midColor: { value: new THREE.Color(0x4a1942) },
        botColor: { value: new THREE.Color(0xff6b6b) },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 botColor;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition).y;
          vec3 col = mix(botColor, midColor, smoothstep(-0.1, 0.3, h));
          col = mix(col, topColor, smoothstep(0.2, 0.8, h));
          gl_FragColor = vec4(col, 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false,
    });
    this.skyMesh = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(this.skyMesh);
  }

  private createGround(): void {
    const groundGeo = new THREE.PlaneGeometry(300, 300, 1, 1);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x1a3322,
      roughness: 0.9,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    this.scene.add(ground);
  }

  // ═══════════════════════════════════════════════════════════
  //  STATE MANAGEMENT — Called by React to transition scenes
  // ═══════════════════════════════════════════════════════════

  setState(state: SceneState): void {
    this.state = state;
    switch (state) {
      case "GARDEN":
        this.enterGarden();
        break;
      case "GATE_APPROACH":
        this.startGateApproach();
        break;
      case "GATE_OPENING":
        this.startGateOpening();
        break;
      case "BOUQUET_REVEAL":
        this.revealBouquet();
        break;
      case "BOUQUET_EXPLORE":
        this.enableExploration();
        break;
      case "HEART_REVEAL":
        this.startHeartReveal();
        break;
      case "FINAL_MESSAGE":
        this.showFinalMessage();
        break;
    }
  }

  private enterGarden(): void {
    // Show garden — camera looking at gates from afar
    this.gate.group.visible = true;
    this.gate.setOpenAmount(0);
    this.lighting.setMood("garden");
    this.particles.setIntensity(1);
    this.scene.fog = new THREE.FogExp2(0x3a1a40, 0.006);

    // Camera starts at garden entrance, looking toward gates
    this.cameraController.setPosition(
      new THREE.Vector3(0, 5, 30),
      new THREE.Vector3(0, 6, -20),
      1.5
    );
  }

  private startGateApproach(): void {
    // Camera slowly moves toward gates
    this.lighting.setMood("gate");
    this.cameraController.setPosition(
      new THREE.Vector3(0, 6, 12),
      new THREE.Vector3(0, 6, -20),
      0.5
    );
    this.cameraController.setSway(0.15);
  }

  private startGateOpening(): void {
    this.lighting.setMood("gate");
    // Camera close to gates
    this.cameraController.setPosition(
      new THREE.Vector3(0, 6, 8),
      new THREE.Vector3(0, 6, -20),
      1
    );
  }

  private revealBouquet(): void {
    // The bouquet is now rendered by StaticBouquetScene as a
    // high-detail cinematic image. Keep the 100,001-instance
    // procedural field out of this phase so the reveal stays
    // smooth on mobile and lower-end devices.
    if (this.roseField) {
      this.roseField.mesh.visible = false;
    }

    // Camera enters through the open gate. The React cinematic
    // plate fades over the Three.js world at the transition
    // midpoint, so this movement remains part of the reveal.
    this.cameraController.setPosition(
      new THREE.Vector3(0, 6.5, 5),
      new THREE.Vector3(0, 6, -20),
      1.1
    );
    this.lighting.setMood("bouquet");
    this.scene.fog = new THREE.FogExp2(0x2a1040, 0.004);

    // Gate fully open.
    this.gate.setOpenAmount(1);
  }

  private enableExploration(): void {
    // Enable orbit controls centered on bouquet
    this.cameraController.enableOrbit(
      new THREE.Vector3(0, 5, -10),
      45
    );
    this.cameraController.setZoomLimits(3, 80);
    this.cameraController.setAutoRotate(false);
    this.cameraController.setSway(0);
    this.lighting.setMood("bouquet");
  }

  /**
   * Enable interaction only after the complete cinematic story.
   * Always start from a straight-on front view, then let the user rotate
   * and zoom freely.
   */
  enableHeartExploration(): void {
    if (!this.roseField) return;

    this.roseField.mesh.visible = true;
    this.roseField.setMorphTarget(1);
    this.cameraController.enableOrbit(
      new THREE.Vector3(0, 5, 0),
      34,
      Math.PI / 2,
      Math.PI / 2
    );
    this.cameraController.setZoomLimits(12, 72);
    this.cameraController.setAutoRotate(false);
    this.cameraController.setSway(0);
    this.roseField.clearHighlight();
  }

  focusRose(roseNumber: number): void {
    if (!this.roseField) return;
    const id = RoseField.roseNumberToInstanceId(roseNumber);
    if (id < 0 || id >= this.roseField.count) return;

    this.roseField.highlightRose(id);
    const worldPos = new THREE.Vector3();
    this.roseField.getRosePosition(id, worldPos);

    // Keep orbit controls active while bringing the selected rose closer.
    this.cameraController.focusOrbitTarget(
      worldPos,
      Math.max(13, Math.min(24, this.cameraController.getRadius() * 0.72))
    );

    this.emit({
      type: "rose-selected",
      roseId: roseNumber,
      worldPosition: [worldPos.x, worldPos.y, worldPos.z],
    });
  }

  private startHeartReveal(): void {
    // Keep the 3D heart visible behind the cinematic story.
    if (!this.roseField) {
      this.roseField = new RoseField(config.roseCount, this.quality);
      this.scene.add(this.roseField.mesh);
    }

    this.roseField.mesh.visible = true;
    this.roseField.setMorphTarget(0);
    this.heartFormedEmitted = false;
    this.heartInteractionReady = false;

    if (this.heartMorphTimer !== null) {
      window.clearTimeout(this.heartMorphTimer);
      this.heartMorphTimer = null;
    }
    if (this.heartInteractionTimer !== null) {
      window.clearTimeout(this.heartInteractionTimer);
      this.heartInteractionTimer = null;
    }

    // Front-facing cinematic camera while the messages play.
    this.cameraController.setPosition(
      new THREE.Vector3(0, 10, 46),
      new THREE.Vector3(0, 5, 0),
      1.35
    );
    this.cameraController.setSway(0.08);
    this.lighting.setMood("heart");
    this.scene.fog = new THREE.FogExp2(0x1a0a30, 0.0042);

    // Form the heart while the messages are displayed.
    this.roseField.setMorphTarget(1);

    // FinalScene completes its story at 14s and holds the final line for
    // 3.5s. Only then is the heart allowed to become interactive.
    this.heartInteractionTimer = window.setTimeout(() => {
      if (this.state !== "HEART_REVEAL") return;
      this.heartInteractionReady = true;
      this.heartInteractionTimer = null;
    }, 17500);
  }

  private showFinalMessage(): void {
    // The final page is fully interactive: orbit, drag, zoom and rose selection.
    this.enableHeartExploration();
  }

  // ═══════════════════════════════════════════════════════════
  //  ROSE SELECTION — Raycasting against InstancedMesh
  // ═══════════════════════════════════════════════════════════

  selectRoseAtScreenPoint(x: number, y: number, width: number, height: number): void {
    if (!this.roseField || (this.state !== "BOUQUET_EXPLORE" && this.state !== "HEART_REVEAL" && this.state !== "FINAL_MESSAGE")) return;

    this.pointer.x = (x / width) * 2 - 1;
    this.pointer.y = -(y / height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.cameraController.camera);
    const intersects = this.raycaster.intersectObject(this.roseField.mesh);

    if (intersects.length > 0) {
      const instanceId = intersects[0].instanceId;
      if (instanceId !== undefined && instanceId >= 0) {
        const roseNumber = RoseField.instanceIdToRoseNumber(instanceId);
        this.roseField.highlightRose(instanceId);

        const worldPos = new THREE.Vector3();
        this.roseField.getRosePosition(instanceId, worldPos);

        this.emit({ type: "rose-selected", roseId: roseNumber, worldPosition: [worldPos.x, worldPos.y, worldPos.z] });
      }
    }
  }

  // Pick a random rose and move camera toward it
  pickRandomRose(): void {
    if (!this.roseField || (this.state !== "BOUQUET_EXPLORE" && this.state !== "HEART_REVEAL" && this.state !== "FINAL_MESSAGE")) return;

    const randomInstanceId = Math.floor(Math.random() * config.roseCount);
    const roseNumber = RoseField.instanceIdToRoseNumber(randomInstanceId);
    this.roseField.highlightRose(randomInstanceId);

    const worldPos = new THREE.Vector3();
    this.roseField.getRosePosition(randomInstanceId, worldPos);

    // Move the orbit target toward the rose without disabling zoom/drag.
    this.cameraController.focusOrbitTarget(
      worldPos,
      Math.max(13, Math.min(24, this.cameraController.getRadius() * 0.72))
    );

    this.emit({ type: "rose-selected", roseId: roseNumber, worldPosition: [worldPos.x, worldPos.y, worldPos.z] });
  }

  // Zoom out fully — triggers heart reveal
  zoomOutFully(): void {
    if (this.state === "BOUQUET_EXPLORE") {
      this.emit({ type: "zoomed-out-fully" });
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  INPUT HANDLING
  // ═══════════════════════════════════════════════════════════

  private setupInput(container: HTMLElement): void {
    const canvas = this.renderer.domElement;
    canvas.style.touchAction = "none";

    canvas.addEventListener("pointerdown", (e) => {
      if (this.state !== "BOUQUET_EXPLORE" && this.state !== "HEART_REVEAL" && this.state !== "FINAL_MESSAGE") return;
      if (e.pointerType === "touch") return;
      this.isDragging = true;
      this.pointerMoved = false;
      this.pointerDownX = e.clientX;
      this.pointerDownY = e.clientY;
      this.lastPointerX = e.clientX;
      this.lastPointerY = e.clientY;
      canvas.setPointerCapture?.(e.pointerId);
    });

    canvas.addEventListener("pointermove", (e) => {
      if (!this.isDragging || e.pointerType === "touch") return;
      const dx = e.clientX - this.lastPointerX;
      const dy = e.clientY - this.lastPointerY;
      if (Math.hypot(e.clientX - this.pointerDownX, e.clientY - this.pointerDownY) > 5) {
        this.pointerMoved = true;
      }
      this.lastPointerX = e.clientX;
      this.lastPointerY = e.clientY;
      this.cameraController.onDrag(dx, dy);
    });

    canvas.addEventListener("pointerup", (e) => {
      if (!this.isDragging || e.pointerType === "touch") return;
      this.isDragging = false;
      canvas.releasePointerCapture?.(e.pointerId);
      if (!this.pointerMoved && (this.state === "BOUQUET_EXPLORE" || this.state === "HEART_REVEAL" || this.state === "FINAL_MESSAGE")) {
        this.selectRoseAtScreenPoint(e.clientX, e.clientY, container.clientWidth, container.clientHeight);
      }
    });

    canvas.addEventListener("pointercancel", () => {
      this.isDragging = false;
    });

    canvas.addEventListener("dblclick", () => {
      if (this.state === "HEART_REVEAL" || this.state === "FINAL_MESSAGE") {
        this.cameraController.resetOrbit(34, new THREE.Vector3(0, 4.5, 0));
        this.roseField?.clearHighlight();
      }
    });

    canvas.addEventListener("wheel", (e) => {
      if (this.state !== "BOUQUET_EXPLORE" && this.state !== "HEART_REVEAL" && this.state !== "FINAL_MESSAGE") return;
      e.preventDefault();
      this.cameraController.onZoom(e.deltaY * 0.5);
    }, { passive: false });

    // Touch: pinch zoom + tap selection.
    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoved = false;

    canvas.addEventListener("touchstart", (e) => {
      if (this.state !== "HEART_REVEAL" && this.state !== "FINAL_MESSAGE") return;
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchMoved = false;
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        this.lastPinchDist = Math.hypot(dx, dy);
      }
    }, { passive: false });

    canvas.addEventListener("touchmove", (e) => {
      if (this.state !== "HEART_REVEAL" && this.state !== "FINAL_MESSAGE") return;
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const dx = touch.clientX - touchStartX;
        const dy = touch.clientY - touchStartY;
        if (Math.hypot(dx, dy) > 6) touchMoved = true;
        if (this.cameraController.isOrbitEnabled()) {
          this.cameraController.onDrag(dx * 0.35, dy * 0.35);
          touchStartX = touch.clientX;
          touchStartY = touch.clientY;
        }
      } else if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const delta = this.lastPinchDist - dist;
        this.lastPinchDist = dist;
        this.cameraController.onZoom(delta * 0.8);
        touchMoved = true;
      }
    }, { passive: false });

    canvas.addEventListener("touchend", (e) => {
      if ((this.state !== "HEART_REVEAL" && this.state !== "FINAL_MESSAGE") || e.changedTouches.length !== 1 || touchMoved) return;
      const touch = e.changedTouches[0];
      this.selectRoseAtScreenPoint(touch.clientX, touch.clientY, container.clientWidth, container.clientHeight);
    }, { passive: false });
  }

  // ═══════════════════════════════════════════════════════════
  //  RENDER LOOP
  // ═══════════════════════════════════════════════════════════

  private animate = (): void => {
    requestAnimationFrame(this.animate);
    const delta = Math.min(this.clock.getDelta(), 0.05);

    this.cameraController.update(delta);
    this.particles.update(delta);

    if (this.roseField) {
      this.roseField.update(delta);
    }

    // Animate gate opening during GATE_OPENING state
    if (this.state === "GATE_OPENING") {
      this.gateOpeningProgress = Math.min(1, this.gateOpeningProgress + delta * 0.5);
      this.gate.setOpenAmount(this.gateOpeningProgress);

      if (this.gateOpeningProgress >= 1) {
        this.emit({ type: "gates-opened" });
      }
    }

    // Animate camera approach during GATE_APPROACH
    if (this.state === "GATE_APPROACH") {
      this.gateApproachProgress = Math.min(1, this.gateApproachProgress + delta * 0.3);
      if (this.gateApproachProgress >= 1) {
        this.emit({ type: "gates-reached" });
      }
    }

    // Check zoom level changes during exploration
    if (this.state === "BOUQUET_EXPLORE") {
      const zoomLevel = this.cameraController.getZoomLevel();
      const rounded = Math.round(zoomLevel * 10) / 10;
      if (rounded !== this.lastZoomLevel) {
        this.lastZoomLevel = rounded;
        // If zoomed out fully, emit event
        if (this.cameraController.getRadius() >= 78) {
          this.emit({ type: "zoomed-out-fully" });
        } else {
          this.emit({ type: "explore-ready" });
        }
      }
    }

    // Heart formation check. Emit only once, after the actual
    // geometry has visibly reached its final shape.
    if (
      this.state === "HEART_REVEAL" &&
      this.roseField &&
      this.heartInteractionReady &&
      !this.heartFormedEmitted &&
      this.roseField.getMorphProgress() >= 0.995
    ) {
      this.heartFormedEmitted = true;
      this.emit({ type: "heart-formed" });
    }

    this.renderer.render(this.scene, this.cameraController.camera);
  };

  // ═══════════════════════════════════════════════════════════
  //  EVENT SYSTEM
  // ═══════════════════════════════════════════════════════════

  onEvent(handler: ExperienceEventHandler): void {
    this.eventHandler = handler;
  }

  private emit(event: ExperienceEvent): void {
    if (this.eventHandler) {
      this.eventHandler(event);
    }
  }

  // ═══════════════════════════════════════════════════════════
  //  RESET EXPERIENCE
  // ═══════════════════════════════════════════════════════════

  resetExperience(): void {
    if (this.heartMorphTimer !== null) {
      window.clearTimeout(this.heartMorphTimer);
      this.heartMorphTimer = null;
    }

    if (this.heartInteractionTimer !== null) {
      window.clearTimeout(this.heartInteractionTimer);
      this.heartInteractionTimer = null;
    }
    this.heartInteractionReady = false;

    this.state = "LETTER";
    this.gateApproachProgress = 0;
    this.gateOpeningProgress = 0;
    this.bouquetRevealProgress = 0;
    this.heartFormedEmitted = false;
    this.lastZoomLevel = -1;

    this.roseField?.clearHighlight();
    if (this.roseField) {
      this.roseField.setMorphTarget(0);
      this.roseField.mesh.visible = false;
    }

    this.cameraController.setPosition(
      new THREE.Vector3(0, 5, 30),
      new THREE.Vector3(0, 6, -20),
      1.5
    );
    this.cameraController.setSway(0.3);
    this.gate.group.visible = true;
    this.gate.setOpenAmount(0);
    this.lighting.setMood("garden");
  }

  // ═══════════════════════════════════════════════════════════
  //  RESIZE & DISPOSE
  // ═══════════════════════════════════════════════════════════

  private onResize(container: HTMLElement): void {
    const w = container.clientWidth;
    const h = container.clientHeight;
    this.renderer.setSize(w, h);
    this.cameraController.setAspect(w / h);
  }

  dispose(): void {
    this.resizeObserver?.disconnect();
    if (this.heartMorphTimer !== null) {
      window.clearTimeout(this.heartMorphTimer);
      this.heartMorphTimer = null;
    }
    if (this.heartInteractionTimer !== null) {
      window.clearTimeout(this.heartInteractionTimer);
      this.heartInteractionTimer = null;
    }

    this.renderer.domElement.remove();
    this.roseField?.dispose();
    this.particles.dispose();
    this.gate.dispose();
    this.lighting.dispose();
    this.renderer.dispose();
  }

  // Check WebGL availability
  static isWebGLAvailable(): boolean {
    try {
      const canvas = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
    } catch {
      return false;
    }
  }
}
