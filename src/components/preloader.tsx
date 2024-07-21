import { Suspense,useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF,OrbitControls,Points,PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
type PointsRef = THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;

function Model() {
  const { scene } = useGLTF("/blue2.glb");

  // Optional: Scale and rotate the model
  scene.scale.set(1, 1, 1);
  scene.rotation.set(0, Math.PI, 0);

  useFrame(() => {
    scene.rotation.y += 0.01; // Rotate the model
  });

  return <primitive object={scene} />;
}

function Particles() {
  const pointsRef = useRef<PointsRef>(null!);
  const texture = useLoader(THREE.TextureLoader, '/pinkdi.png');

  const count = 1000;
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0001; // Rotate the particles
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent  map={texture} size={0.05} sizeAttenuation={true} depthWrite={false} />
    </Points>
  );
}

export default function Preloader() {
  return (
    <div className="flex h-screen items-center justify-center">
        {/* <div>
            <h1 className="text-4xl font-bold text-center mt-20">Loading...</h1>
        </div> */}
         <div
        className="absolute"
        style={{
          top: '65%', // Adjust as needed
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)', // Center vertically
          pointerEvents: 'none', // Ensure it doesn’t interfere with interactions
          zIndex: 1 // Ensure it’s behind the Canvas
        }}
      >
        <img src="/blueText.svg" alt="Text Background" style={{ width: '300px' }} />
      </div>
      <Canvas
        className="h-full w-full bg-[url('/victorian.svg')]  bg-center bg-no-repeat "
      >
        <Suspense fallback={null}>
          <Particles />
          <Model />
          <ambientLight intensity={1.5} />
          <Environment preset="studio" />
          <OrbitControls autoRotate autoRotateSpeed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}