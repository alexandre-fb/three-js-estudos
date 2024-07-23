const materialCasquinha = new THREE.MeshLambertMaterial(
  { 
    color: 0x8e633a ,
    side: THREE.DoubleSide
  }
);

// CASQUINHA
const casquinha = new THREE.Mesh(
  new THREE.ConeBufferGeometry(0.5, 1.5, 32, 15),
  materialCasquinha
);
casquinha.rotation.x = THREE.MathUtils.degToRad(180);

scene.add(casquinha);

x3.add(casquinha, {
  label: 'casquinha'
});

// BOLA DE SORVETE
const materialBola = new THREE.MeshLambertMaterial(
  { 
    color: 0xf054c4 ,
    side: THREE.DoubleSide
  }
);

const bola = new THREE.Mesh(
  new THREE.SphereBufferGeometry(0.5, 32, 32),
  materialBola
);
bola.position.y = 0.9;

scene.add(bola);

x3.add(bola, {
  label: 'bola'
});

renderer.render(scene, camera);