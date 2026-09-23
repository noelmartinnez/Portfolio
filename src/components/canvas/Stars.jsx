import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { useInView } from "../../hooks/useInView";
import { hasWebGL } from "../../utils/webgl";

// Menos partículas por debajo de 1100px: el móvil no necesita tantos puntos.
const POINTS = window.matchMedia("(max-width: 1100px)").matches ? 500 : 1700;

// Geometría estática: solo gira el grupo, las posiciones no se resuben a la GPU.
const Stars = () => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(POINTS * 3), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={sphere} count={POINTS} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial transparent color="#f272c8" size={0.002} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
};

const StarsCanvas = () => {
  const { ref, inView, seen } = useInView("400px");

  if (!hasWebGL()) return null;

  return (
    <div ref={ref} className='w-full h-auto absolute inset-0 z-[-1]'>
      {seen && (
        <Canvas
          camera={{ position: [0, 0, 1] }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: "default" }}
          frameloop={inView ? "always" : "never"}
        >
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
