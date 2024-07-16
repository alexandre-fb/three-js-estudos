const options = {
  targetSelector: '#scene',
  width: 800,
  height: 600,
  backgroundColor: 0x254582
}

const renderer = new THREE.WebGLRenderer(options);

renderer.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(options.backgroundColor);

const camera = new THREE.PerspectiveCamera(
  50, options.width / options.height
)
camera.position.z = 5;

const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 2)

scene.add(light);


