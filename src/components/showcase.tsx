import { useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Define the Model component
function Model({ position }: { position: [number, number, number] }) {
  const { scene } = useGLTF("/blue2.glb");
  useEffect(() => {
    scene.traverse((object) => {
      if ((object as THREE.Mesh).isMesh) {
        const mesh = object as THREE.Mesh;
        if (mesh.material && 'metalness' in mesh.material) {
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.metalness = 1; // Set the metalness to 1 for a metallic look
          material.roughness = 0.4; // Adjust roughness for shininess
          material.envMapIntensity = 1; // Enhance reflection from environment map
        }
      }
    });
  }, [scene]);

  // Optional: Scale and rotate the model
  scene.scale.set(1, 1, 1);
  scene.position.set(...position);
  return <primitive object={scene} />;
}

const Skybox = () => {
  return (
    <Environment
      files="/kloppenheim_06_puresky_1k.hdr"
      background // Set this to true to use the HDR map as the background
    />
  );
};

export default function Showcase() {
  const modelSpacing = 4; // Space between models

  return (
    <div className="flex h-screen items-center">
      <Canvas
        camera={{ position: [0, 0, 10] }} // Adjusted camera position to fit all models
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 0.4; // Adjust this value to reduce exposure
        }}
      >
        <Suspense fallback={null}>
          <Skybox />
          {/* Render three models side by side */}
          <Model position={[-modelSpacing, 0, 0]} />
          <Model position={[0, 0, 0]} />
          <Model position={[modelSpacing, 0, 0]} />
          <ambientLight intensity={0.2} /> {/* Reduced intensity */}
          <directionalLight
            position={[10, 10, 10]}
            intensity={0.2} // Reduced intensity
            castShadow
          />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
