import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage, Center, Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react'

function Model() {
  const { scene } = useGLTF("/earth/scene.gltf");
  return <primitive object={scene} scale={1} />;
}

const Watertank = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Canvas shadows camera={{ position: [0, 0, 20], fov: 45 }}>
        
        1. Ambient Light: Pure scene mein halki raushni (no shadows)
        <ambientLight intensity={0.5} />

        {/* 2. Directional Light: Suraj ki tarah ek side se aane wali light */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={1024}
        />

        {/* 3. Point Light: Ek bulb ki tarah jo har taraf light phenkta hai */}
        <pointLight position={[-10, -10, -10]} color="indigo" intensity={1} />

        {/* 4. Spot Light: Ek khas jagah focus karne ke liye */}
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={2} castShadow />

        <Suspense fallback={null}>
          {/* Stage ko lighting ke bina use kar rahe hain (intensity=0) 
              kyunki humne upar manual lights lagayi hain */}
          <Stage adjustCamera={false} intensity={0} environment={null}>
            <Center>
              <Model />
            </Center>
          </Stage>

          {/* 5. Environment: Realistic reflections ke liye sabse best hai */}
          <Environment preset="city" />
          
          {/* 6. Shadows: Model ke niche floor par shadow ke liye */}
          <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        </Suspense>

        <OrbitControls enableZoom={true} makeDefault />
      </Canvas>
    </div>
  );
};

export default Watertank;
