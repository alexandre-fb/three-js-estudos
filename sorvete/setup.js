const options = {
  targetSelector: "#scene",
  width: 800,
  height: 600,
  backgroundColor: 0x254582,
}

const renderer = new THREE.WebGLRenderer(
  { antialias: true }
)

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(options.backgroundColor);

const camera = new THREE.PerspectiveCamera(50, options.width / options.height);
camera.position.x = 2.5;
camera.position.y = 2.5;
camera.position.z = 2;

const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 2);
light.position.y = 3;
light.position.x = 1;

scene.add(light);

const x3 = new THREEx3({
  THREE,
  OrbitControls: THREE.OrbitControls,
  camera,
  renderer,
  scene,
});

x3.add(camera, { open: false });
x3.add(light);

