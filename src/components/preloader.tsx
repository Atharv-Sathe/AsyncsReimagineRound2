import { useEffect } from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

export default function Preloader() {
    useEffect(() => {
        // Set up the scene
        const scene = new THREE.Scene();

        // Set up the camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Set up the renderer
        const canvas = document.getElementById('c') as HTMLCanvasElement;
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true // Use alpha for transparency
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Load a 3D model
        const loader = new GLTFLoader();
        loader.load('/blueDiamond.glb', (gltf) => {
            scene.add(gltf.scene);
            gltf.scene.position.set(0, 0, 0);

            // Optional: Scale and rotate the model
            gltf.scene.scale.set(1, 1, 1);
            gltf.scene.rotation.set(0, Math.PI, 0);
        }, undefined, (error) => {
            console.error('An error occurred while loading the model:', error);
        });

        // Add a light source
        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        scene.add(light);

        // Animation loop
        const animate = function () {
            requestAnimationFrame(animate);

            // Rotate the model
            scene.rotation.y += 0.01;

            // Render the scene
            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='flex bg-[#edafbc]'>
            <canvas id="c" className="bg-[url('/victorian.svg')]  bg-center bg-no-repeat"></canvas>
        </div>
    );
}
