import * as THREE from "three";

// ═══════════════════════════════════════════════════════════
//  ROSE MODEL — Procedural low-poly rose geometry
//  Creates a single optimized rose mesh suitable for instancing
//  Petals are simple cones/spheres arranged in a spiral
// ═══════════════════════════════════════════════════════════

export function createRoseGeometry(): THREE.BufferGeometry {
  const rose = new THREE.Group();

  // Outer petals — 5 large cones arranged radially, tilted outward
  const outerPetalGeo = new THREE.ConeGeometry(0.45, 0.5, 5);
  outerPetalGeo.translate(0, 0.1, 0);
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;
    const petal = new THREE.Mesh(outerPetalGeo);
    petal.position.set(Math.cos(angle) * 0.28, 0.05, Math.sin(angle) * 0.28);
    petal.rotation.z = -0.5;
    petal.rotation.y = angle;
    rose.add(petal);
  }

  // Middle petals — 7 medium cones, tighter
  const midPetalGeo = new THREE.ConeGeometry(0.3, 0.35, 5);
  midPetalGeo.translate(0, 0.1, 0);
  for (let i = 0; i < 7; i++) {
    const angle = (i / 7) * Math.PI * 2 + 0.3;
    const petal = new THREE.Mesh(midPetalGeo);
    petal.position.set(Math.cos(angle) * 0.15, 0.15, Math.sin(angle) * 0.15);
    petal.rotation.z = -0.3;
    petal.rotation.y = angle;
    rose.add(petal);
  }

  // Inner petals — 5 small cones
  const innerPetalGeo = new THREE.ConeGeometry(0.18, 0.22, 5);
  innerPetalGeo.translate(0, 0.08, 0);
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;
    const petal = new THREE.Mesh(innerPetalGeo);
    petal.position.set(Math.cos(angle) * 0.06, 0.25, Math.sin(angle) * 0.06);
    petal.rotation.z = -0.15;
    petal.rotation.y = angle;
    rose.add(petal);
  }

  // Center bud — small sphere
  const budGeo = new THREE.SphereGeometry(0.1, 6, 5);
  budGeo.translate(0, 0.32, 0);
  rose.add(new THREE.Mesh(budGeo));

  // Merge all geometries into one
  const merged = mergeGeometries(rose);
  merged.computeVertexNormals();
  return merged;
}

function mergeGeometries(group: THREE.Group): THREE.BufferGeometry {
  const geometries: THREE.BufferGeometry[] = [];
  group.traverse((child) => {
    if (child instanceof THREE.Mesh && child.geometry) {
      const geo = child.geometry.clone();
      geo.applyMatrix4(child.matrixWorld);
      // Apply the group's world matrix
      child.updateMatrixWorld();
      const geo2 = child.geometry.clone();
      geo2.applyMatrix4(child.matrixWorld);
      geometries.push(geo2);
    }
  });

  // Use BufferGeometryUtils merge
  const merged = new THREE.BufferGeometry();
  const positions: number[] = [];
  const normals: number[] = [];

  for (const geo of geometries) {
    const pos = geo.attributes.position;
    const norm = geo.attributes.normal;
    for (let i = 0; i < pos.count; i++) {
      positions.push(pos.getX(i), pos.getY(i), pos.getZ(i));
      if (norm) {
        normals.push(norm.getX(i), norm.getY(i), norm.getZ(i));
      } else {
        normals.push(0, 1, 0);
      }
    }
  }

  merged.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  merged.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  merged.computeVertexNormals();
  return merged;
}
