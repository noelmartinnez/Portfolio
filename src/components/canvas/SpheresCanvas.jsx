import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { useInView } from "../../hooks/useInView";

// Menos partículas por debajo de 1100px.
const POINTS = window.matchMedia("(max-width: 1100px)").matches ? 400 : 1350;

// Geometría estática: solo gira el grupo, las posiciones no se resuben a la GPU.
const Spheres = () => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(POINTS * 3), { radius: 5.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 20;
    ref.current.rotation.y += delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={sphere} count={POINTS} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial transparent color="#d4a1f5" size={0.01} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
};

const SpheresCanvas = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        camera={{ position: [0, 0, 2] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "default" }}
        frameloop={inView ? "always" : "never"}
      >
        <Suspense fallback={null}>
          <Spheres />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SpheresCanvas;
