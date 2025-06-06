import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const CarModel = () => {
  const { scene } = useGLTF("/models/sf23.glb");

  return (
    <Canvas camera={{ position: [6, 3, 1], fov: 20 }}>
      <ambientLight intensity={2.5} />
      <directionalLight position={[2, 2, 5]} intensity={4} />
      <primitive object={scene} />
      <OrbitControls />
    </Canvas>
  );
};

export default CarModel;
