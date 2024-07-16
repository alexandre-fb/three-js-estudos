const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial(
  { color: 0xffffff }
);

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
cube.rotation.x = 90;
cube.rotation.y = 90;

renderer.setAnimationLoop(() => {
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.02;
  renderer.render(scene, camera);
});
