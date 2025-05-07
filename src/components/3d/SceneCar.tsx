import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface SceneProps {
  position?: [number, number, number];
  fov?: number;
}

// This is a placeholder for actual 3D model data
// In a real app, we would use actual 3D models from three.js
const Car = () => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <mesh ref={mesh} castShadow receiveShadow>
      <boxGeometry args={[1, 0.5, 2]} />
      <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
      
      {/* Windshield */}
      <mesh position={[0, 0.25, 0.3]} castShadow>
        <boxGeometry args={[0.95, 0.25, 0.4]} />
        <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0} transparent opacity={0.7} />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[-0.5, -0.3, 0.7]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0.5, -0.3, 0.7]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[-0.5, -0.3, -0.7]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0.5, -0.3, -0.7]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" metalness={0.5} roughness={0.4} />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[-0.4, 0, 1]} castShadow>
        <boxGeometry args={[0.2, 0.1, 0.05]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.4, 0, 1]} castShadow>
        <boxGeometry args={[0.2, 0.1, 0.05]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
      </mesh>
    </mesh>
  );
};

const Fallback = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-racing-500 animate-spin" />
        <p className="text-sm mt-2 text-white">Loading 3D model...</p>
      </div>
    </Html>
  );
};

export const SceneCar = ({ position = [0, 0, 4], fov = 45 }: SceneProps) => {
  const [autoRotate, setAutoRotate] = useState(true);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full canvas-container"
    >
      <Canvas shadows dpr={[1, 2]} className="touch-none">
        <PerspectiveCamera makeDefault position={position} fov={fov} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-10, 10, -10]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
        
        <Suspense fallback={<Fallback />}>
          <Car />
          <Environment preset="city" />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.5} width={10} height={10} blur={1} far={2} />
        </Suspense>
        
        <OrbitControls autoRotate={autoRotate} enableZoom={true} enablePan={false} />
      </Canvas>
      
      <div className="absolute bottom-4 right-4 z-10">
        <button 
          onClick={() => setAutoRotate(!autoRotate)}
          className="bg-primary-800/80 backdrop-blur-sm hover:bg-primary-700 text-white p-2 rounded-full"
        >
          {autoRotate ? 'Stop Rotation' : 'Auto Rotate'}
        </button>
      </div>
    </motion.div>
  );
};

export default SceneCar;