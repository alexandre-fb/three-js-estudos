const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshBasicMaterial();

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);