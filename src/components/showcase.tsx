import { useEffect, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define the Model component
function Model({ position }: { position: [number, number, number] }) {
  const { scene } = useGLTF("/blue2.glb");
  useEffect(() => {
    scene.traverse((object) => {
      if ((object as THREE.Mesh).isMesh) {
        const mesh = object as THREE.Mesh;
        if (mesh.material && "metalness" in mesh.material) {
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

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const upperShed = useRef<HTMLDivElement>(null);
  const lowerShed = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current!,
        pin: true,
        markers: false,
        anticipatePin: 1,
        start: "top top",
        end: "bottom+=500 top",
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(upperShed.current!, { yPercent: -100, duration: 2 });
          tl.to(lowerShed.current!, { height: "0%", duration: 2 }, "<");
          tl.to(lowerShed.current!, { yPercent: 100, duration: 2 }, "<");
          tl.to(upperShed.current!, { height: "0%", duration: 2 }, "<");
        },
        onLeaveBack: () => {
          const tl = gsap.timeline();
          tl.to(upperShed.current!, { yPercent: 0, duration: 2 });
          tl.to(lowerShed.current!, { height: "50%", duration: 2 }, "<");
          tl.to(lowerShed.current!, { yPercent: 0, duration: 2 }, "<");
          tl.to(upperShed.current!, { height: "50%", duration: 2 }, "<");
        },
      },
    });
  });

  const modelSpacing = 4; // Space between models
  const canvas = true;
  return (
    <div ref={containerRef} className="relative">
      <div
        ref={upperShed}
        className=" absolute z-10 h-[50vh] w-screen bg-red-300 top-0 overflow-hidden"
      >
        {" "}
        <div className="absolute flex justify-center items-center w-full bottom-[-40px] text-6xl">
          <img src="/blueText.svg" />
        </div>
      </div>
      <div
        ref={lowerShed}
        className=" absolute z-10 h-[50vh] w-screen bg-red-300 bottom-0 overflow-hidden"
      >
        {" "}
        <div className="absolute flex justify-center items-center w-full top-[-40px] text-center text-6xl">
          <img src="/blueText.svg" />
        </div>
      </div>
      <div className="flex h-screen items-center">
        {canvas && (
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
        )}
      </div>
    </div>
  );
}
