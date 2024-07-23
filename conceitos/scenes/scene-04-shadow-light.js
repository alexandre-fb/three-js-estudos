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
const shadowLight = new THREE.PointLight(0xffffff, 2, 60);
shadowLight.castShadow = true;
shadowLight.position.y = 4;
scene.add(shadowLight);

x3.add(shadowLight, {
  label: "shadowLight",
  helper: { visible: false },
});

renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render;
  });

  renderer.render(scene, camera);
});
