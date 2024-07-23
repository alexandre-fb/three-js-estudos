const path = new THREE.Shape();

path.moveTo(1, 3);

//trabalha com um ponto de referencia pras duas coordenadas
//peimeiros 2 sao xy do ponto de referencia, ultimos dois sao o ponto final do desenho
// path.quadraticCurveTo(6, 1, 8, 3);

//trabalha com dois pontos de referencia
// path.bezierCurveTo(3, 5, 6, 1, 8, 3);

// coracao
path.moveTo(0.3, 1.5);
path.quadraticCurveTo(0.3, 2.2, 0.9, 2.2);
path.quadraticCurveTo(1.3, 2.2, 1.4, 1.7);
path.quadraticCurveTo(1.5, 2.2, 1.9, 2.2);
path.quadraticCurveTo(2.5, 2.2, 2.5, 1.5);
path.quadraticCurveTo(2.5, 1.0, 1.4, 0.3);
path.quadraticCurveTo(0.3, 1.0, 0.3, 1.5);

console.log(path)
// cria um plano
// const geometry = new THREE.ShapeBufferGeometry(path)

// cria com profundidade
const geometry = new THREE.ExtrudeGeometry(path, {
  depth: 0.1, //profundidade
  bevelEnabled: true, //borda arredondada
  bevelSize: 0.1, //tamanho da borda
  bevelThickness: 0.1, //espessura da borda
});

const material = new THREE.MeshLambertMaterial({ 
    color: 0xd24747,
    side: THREE.DoubleSide
  });

const draw = new THREE.Mesh(geometry, material);

scene.add(draw);

renderer.setAnimationLoop(() => {
  x3.tick();
  x3.fps(() => {
    renderer.render
  });

  renderer.render(scene, camera);
});

x3.add(draw, {
  label: 'draw'
});
