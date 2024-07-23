const loader = new THREE.TextureLoader();

const polyester = new THREE.MeshPhysicalMaterial({
  map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg'),
  normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg'),
});

const wood = new THREE.MeshPhysicalMaterial({
  map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/basecolor.jpg'),
  normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/normal.jpg'),
});

const metal = new THREE.MeshPhysicalMaterial({
  transparent: true,
  side: THREE.DoubleSide,
  map: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/basecolor.jpg'),
  alphaMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/opacity.jpg'),
  metalnessMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/metallic.jpg'),
  emissiveMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/emissive.jpg'),
  normalMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/normal.jpg'),
  aoMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/occlusion.jpg'),
  roughnessMap: loader.load('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/roughness.jpg'),
});

// ball
const ball = new THREE.Mesh(
  new THREE.SphereBufferGeometry(0.5, 60, 60),
  polyester
);
ball.position.set(0, 1, 0);
ball.castShadow = true;
scene.add(ball);

x3.add(ball, {
  label: "ball",
});

// FLOOR
const floor = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(10, 10),
  metal
);
floor.rotation.x = THREE.MathUtils.degToRad(-90);
floor.receiveShadow = true;
scene.add(floor);

x3.add(floor, {
  label: "floor",
});

// LIGHT
const shadowLight = new THREE.PointLight(0xffffff, 10);
shadowLight.castShadow = true;
shadowLight.position.y = 2;
shadowLight.position.x = -3;
shadowLight.target = ball;
scene.add(shadowLight);

x3.add(shadowLight, {
  label: "shadowLight",
  helper: { visible: true },
});

renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render;
  });

  renderer.render(scene, camera);
});
