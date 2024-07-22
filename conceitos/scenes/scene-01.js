const geometry = new THREE.BoxBufferGeometry();
const material = new THREE.MeshLambertMaterial(
  { color: 0xffffff }
);

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

x3.add(cube, {
  label: 'cube'
});

renderer.setAnimationLoop(() => {
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.02;

  x3.tick();
  x3.fps(() => {
    renderer.render
  });

  renderer.render(scene, camera);
});
