const material = new THREE.MeshLambertMaterial(
  { 
    color: 0x3277a8 ,
    side: THREE.DoubleSide
  }
);

//cube===
const cube = new THREE.Mesh(
  //x y z
  new THREE.BoxBufferGeometry(1, 1, 1),
  material
);

scene.add(cube);

cube.position.y = 0.5;

//circle
const circle = new THREE.Mesh(
  //radius, segments
  new THREE.CircleBufferGeometry(1, 32),
  material
);

scene.add(circle);

circle.position.x = -2;
circle.rotation.x = THREE.MathUtils.degToRad(-90);

//cone
const cone = new THREE.Mesh(
  //radius, height, radialSegments, heightSegments
  new THREE.ConeBufferGeometry(1, 2, 32, 15),
  material
);

scene.add(cone);

cone.position.x = 2;
cone.position.y = 1;

//cylinder
const cylinder = new THREE.Mesh(
  //radiustop, radiusbottom, height, heightSegments
  new THREE.CylinderBufferGeometry(1, 1, 2, 32),
  material
);

scene.add(cylinder);

cylinder.position.z = -3;
cylinder.position.y = 1;

//plane
const plane = new THREE.Mesh(
  //radiustop, radiusbottom, height, heightSegments
  new THREE.PlaneBufferGeometry(1, 1, 2, 32),
  material
);

scene.add(plane);

plane.position.z = 1.5;
plane.rotation.x = THREE.MathUtils.degToRad(-90);

//sphere
const sphere = new THREE.Mesh(
  //radius, widhtSegments, heightSegments
  new THREE.SphereBufferGeometry(0.5, 20, 20, ),
  material
);

scene.add(sphere);

sphere.position.z = 1.5;
sphere.position.y = 2;
sphere.rotation.x = THREE.MathUtils.degToRad(-90);

//x3
x3.add(cube, {
  label: 'cube'
});

x3.add(circle, {
  label: 'circle'
});

x3.add(cone, {
  label: 'cone'
});

x3.add(cylinder, {
  label: 'cylinder'
});

x3.add(sphere, {
  label: 'sphere'
});

renderer.setAnimationLoop(() => {
  
  x3.tick();
  x3.fps(() => {
    renderer.render
  });

  renderer.render(scene, camera);
});
