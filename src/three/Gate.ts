import * as THREE from "three";

// ═══════════════════════════════════════════════════════════
//  GATE — Ornate magical rose gates built from primitives
//  Two doors that can open outward via animation
// ═══════════════════════════════════════════════════════════

export class Gate {
  group: THREE.Group;
  leftDoor: THREE.Group;
  rightDoor: THREE.Group;
  private openAmount = 0; // 0 = closed, 1 = open

  // Light behind gates
  gateLight: THREE.PointLight;

  constructor() {
    this.group = new THREE.Group();
    this.leftDoor = this.createDoor(true);
    this.rightDoor = this.createDoor(false);

    // Position doors
    this.leftDoor.position.x = -4;
    this.rightDoor.position.x = 4;

    this.group.add(this.leftDoor);
    this.group.add(this.rightDoor);

    // Arch over the gates
    this.group.add(this.createArch());

    // Light behind gates
    this.gateLight = new THREE.PointLight(0xffd700, 0, 30, 1.5);
    this.gateLight.position.set(0, 6, -3);
    this.group.add(this.gateLight);
  }

  private createDoor(isLeft: boolean): THREE.Group {
    const door = new THREE.Group();
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xb8860b,
      roughness: 0.3,
      metalness: 0.8,
    });
    const vineMat = new THREE.MeshStandardMaterial({
      color: 0x2d5016,
      roughness: 0.7,
      metalness: 0.1,
    });
    const roseMat = new THREE.MeshStandardMaterial({
      color: 0xc41e3a,
      roughness: 0.5,
      metalness: 0.2,
    });

    // Main door panel
    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(4, 12, 0.4),
      goldMat
    );
    panel.position.y = 6;
    door.add(panel);

    // Decorative bars
    for (let i = 0; i < 4; i++) {
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 0.15, 0.5),
        goldMat
      );
      bar.position.y = 2 + i * 3;
      door.add(bar);
    }

    // Vertical bars
    for (let i = 0; i < 3; i++) {
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 11, 0.5),
        goldMat
      );
      bar.position.set((i - 1) * 1.2, 6, 0.05);
      door.add(bar);
    }

    // Handle
    const handle = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 8, 6),
      goldMat
    );
    handle.position.set(isLeft ? 1.5 : -1.5, 5, 0.3);
    door.add(handle);

    // Vines climbing the door
    for (let i = 0; i < 6; i++) {
      const vine = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 8 + Math.random() * 3, 4),
        vineMat
      );
      vine.position.set(
        (Math.random() - 0.5) * 3.5,
        2 + Math.random() * 8,
        0.25
      );
      vine.rotation.z = (Math.random() - 0.5) * 0.5;
      door.add(vine);
    }

    // Roses on vines
    for (let i = 0; i < 8; i++) {
      const rose = new THREE.Mesh(
        new THREE.SphereGeometry(0.25 + Math.random() * 0.15, 5, 4),
        roseMat
      );
      rose.position.set(
        (Math.random() - 0.5) * 3.5,
        2 + Math.random() * 9,
        0.3
      );
      door.add(rose);
    }

    // Glowing edge
    const edgeGeo = new THREE.BoxGeometry(4, 0.1, 0.45);
    const edgeMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    const topEdge = new THREE.Mesh(edgeGeo, edgeMat);
    topEdge.position.y = 12;
    door.add(topEdge);

    return door;
  }

  private createArch(): THREE.Group {
    const arch = new THREE.Group();
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xb8860b,
      roughness: 0.3,
      metalness: 0.8,
    });
    const roseMat = new THREE.MeshStandardMaterial({
      color: 0xc41e3a,
      roughness: 0.5,
    });

    // Arch torus
    const archGeo = new THREE.TorusGeometry(5, 0.3, 8, 16, Math.PI);
    const archMesh = new THREE.Mesh(archGeo, goldMat);
    archMesh.position.set(0, 12, 0);
    archMesh.rotation.z = Math.PI;
    arch.add(archMesh);

    // Roses on arch
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI;
      const rose = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 5, 4),
        roseMat
      );
      rose.position.set(
        Math.cos(angle + Math.PI) * 5,
        12 + Math.sin(angle) * 5,
        0
      );
      arch.add(rose);
    }

    return arch;
  }

  // Animate gate opening: 0 = closed, 1 = fully open
  setOpenAmount(amount: number): void {
    this.openAmount = amount;
    // Left door rotates left, right door rotates right
    // Pivot at the inner edge
    this.leftDoor.rotation.y = amount * 1.4; // open outward
    this.rightDoor.rotation.y = -amount * 1.4;

    // Light intensity increases as gates open
    this.gateLight.intensity = amount * 5;
  }

  getOpenAmount(): number {
    return this.openAmount;
  }

  dispose(): void {
    this.group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        if (child.material instanceof THREE.Material) {
          child.material.dispose();
        }
      }
    });
  }
}
