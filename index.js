import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { InfiniteGridHelper } from "./InfiniteGridHelper.js";

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(50, aspect);
camera.position.set(0, 5, 20);

const controls = new OrbitControls(camera, renderer.domElement);
controls.maxDistance = 150;
controls.addEventListener("change", render);

const scene = new THREE.Scene();
const grid = new InfiniteGridHelper();
scene.add(grid);

render();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
});

function render() {
  renderer.render(scene, camera);
}
