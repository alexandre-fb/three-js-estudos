// CUBE
const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(),
  new THREE.MeshLambertMaterial({ color: 0x846ce6 })
);
cube.position.set(0, 1, 0);
cube.castShadow = true;
scene.add(cube);

x3.add(cube, {
  label: "cube",
});

// FLOOR
const floor = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(10, 10),
  new THREE.MeshLambertMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  })
);
floor.rotation.x = THREE.MathUtils.degToRad(-90);
floor.receiveShadow = true;
scene.add(floor);

// LIGHT
const sunLight = new THREE.DirectionalLight(0xffffff, 2, 60);
sunLight.castShadow = true;
sunLight.position.y = 8;
sunLight.target = cube;
scene.add(sunLight);

x3.add(sunLight, {
  label: "sunLight",
  helper: { visible: true },
});

renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render;
  });

  renderer.render(scene, camera);
});
