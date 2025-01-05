import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Spheres = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(4000), { radius: 5.5 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 20; // Movimiento suave en X
    ref.current.rotation.y += delta / 25; // Movimiento suave en Y
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#d4a1f5' // Color púrpura claro
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const SpheresCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Suspense fallback={null}>
          <Spheres />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default SpheresCanvas;
