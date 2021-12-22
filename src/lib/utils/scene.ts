import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import type { Texture } from 'three/src/textures/Texture';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

let renderer;

/**
 * Helpers
 */
const handleGLTFLoad = (gltf): void => {
	scene.add(gltf.scene);
	gltf.scene.rotation.x = Math.PI / 2;
	gltf.scene.children[0].children.forEach((child) => (child.material.envMapIntensity = 1));
};

const handleRGBELoad = (texture: Texture) => {
	texture.mapping = THREE.EquirectangularReflectionMapping;
	scene.background = new THREE.Color(0x000000);
	scene.environment = texture;
};

new RGBELoader().load('./empty_warehouse.hdr', handleRGBELoad);

new GLTFLoader().load('./DevVetLogo.gltf', handleGLTFLoad);

// scene.add(cube);

const animate = (): void => {
	requestAnimationFrame(animate);
	scene.rotateOnAxis(new THREE.Vector3(0, 1, 0), 0.005);
	renderer.render(scene, camera);
};

const resize = (): void => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

const setupControls = (): void => {
	const controls = new OrbitControls(camera, renderer.domElement);
	controls.minDistance = 2;
	controls.maxDistance = 10;
	controls.target.set(0, 0, -0.2);
	controls.update();
};

export const createScene = (el: HTMLCanvasElement): void => {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
	el.style.width = '100%';
	// setupControls();
	resize();
	animate();
};

window.addEventListener('resize', resize);
