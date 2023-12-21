import // Backdrop,
// RoundedBox,
// ScrollControls,
// Scroll,
// Sparkles,
// Float,
// Ring
"@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Scroll, ScrollControls, Html } from "@react-three/drei";
import { Interface } from "./components/interface";
import { ScrollManager } from "./components/ScrollMAnager";
import React, { Suspense, useEffect, useState } from "react";
import { Menu } from "./components/Menue";
import { cloneUniformsGroups, DoubleSide } from "three";
import { Reflector, Text, useTexture, useGLTF } from "@react-three/drei";
import Nav from "./components/Nav";
import { Petra } from "./components/w7models/Petra";
import { Sphere } from "@react-three/drei";
import { Sun } from "./components/w7models/Sun";
import { Mahal } from "./components/w7models/Mahal";
import { Redeemer } from "./components/w7models/Redeemer";
import { N } from "./components/w7models/N";
import { China } from "./components/w7models/China";
import { Colosseum } from "./components/w7models/Colosseum";
import { MeshReflectorMaterial } from "@react-three/drei"

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(0);
  const [sevenwmodel, setDisplayseven] = useState(0);

  useEffect(() => {
    setInterval(() => {
      let rand = Math.floor(Math.random() * 6)
      setDisplayseven(rand);
    }, 500)
  }, [])

  return (
    <>
      <Canvas
        concurrent
        gl={{ alpha: false }}
        pixelRatio={[1, 1.5]}
        camera={{ position: [0, 3, 100], fov: 15 }}
      >
        {/* <color attach="background" args={["#ececec"]} /> */}
        {/* <OrbitControls /> */}
        <color attach="background" args={["black"]} />
        <fog attach="fog" args={["black", 15, 20]} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            <Carla
              rotation={[0, Math.PI - 0.4, 0]}
              position={[-1.2, 0, 0.6]}
              scale={[0.26, 0.26, 0.26]}
            />
            <VideoText position={[0, 1.3, -2]} />
            <Ground />
            <group position={[100,100,100]}>
            {
              (sevenwmodel===0)?(<Petra position={[-1,2,6]} scale={0.006} />):
              (sevenwmodel===1)?(<Sun position={[-1,2,6]} scale={0.006} />):
              (sevenwmodel===2)?(<Mahal position={[-1,2,6]} scale={0.006} />):
              (sevenwmodel===3)?(<Redeemer position={[-1,2,6]} scale={0.006} />):
              (sevenwmodel===4)?(<N position={[-1,2,6]} scale={0.006} />):
              (sevenwmodel===5)?(<China position={[-1,2,6]} scale={0.006} />):
              (<Colosseum position={[-1,2,6]} scale={0.006} />)
            }
            {/* <Petra position={[-1,2,6]} scale={0.006} /> */}
            {/* <Sun position={[-1,2,6]} scale={0.006} /> */}
            {/* <Mahal position={[-1,2,6]} scale={0.006} /> */}
            {/* <Redeemer position={[-1,2,6]} scale={0.006} /> */}
            {/* <N position={[-1,2,6]} scale={0.006} /> */}
            {/* <China position={[-1,2,6]} scale={0.006} /> */}
            {/* <Colosseum position={[-1,2,6]} scale={0.006} /> */}
            </group>
          </group>
          
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-50, 0, -40]} intensity={0.7} />
          <Intro />

          <ScrollControls pages={9.54} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <mesh
                position={[0,-24.6, 4]}
                rotation={[0, 0, 0]}
                scale={[1, 3.1, 1]}
              >
                <planeGeometry attach="geometry" args={[25, 15]} />
                <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={480}
                mixBlur={1}
                mixStrength={60}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#151515"
                metalness={0.5} />
                {/* <meshBasicMaterial color="white" side={DoubleSide} /> */}
              </mesh>
              <Petra position={[-1,-4,6]} scale={0.006} />
              <Sun position={[1,-5,6]} scale={0.005} />
              <Mahal position={[-3.3,-6,6]} scale={0.006} />
              <Redeemer position={[-2,-19.5,6]} scale={0.006} />
              <N position={[1.3,-7.5,6]} scale={0.006} />
              <China position={[0.4,-10,6]} scale={0.006} />
              <Colosseum position={[1,-17,6]} scale={0.006} />
            </Scroll>
            <Scroll html>
              <Nav />
              <Interface onSectionChange = {setSection} />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      {/* <Menu onSectionChange = {setSection} menuOpened ={menuOpened} setMenuOpened = {setMenuOpened}/> */}
    </>
  );
}

function Carla(props) {
  const { scene } = useGLTF("/carla-draco.glb");
  return <primitive object={scene} {...props} />;
}

function VideoText(props) {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/Srijan.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);

  return (
    <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
      SRIJAN
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  );
}

function Ground() {
  const [floor, normal] = useTexture([
    "/SurfaceImperfections003_1K_var1.jpg",
    "/SurfaceImperfections003_1K_Normal.jpg",
  ]);
  return (
    <Reflector
      blur={[400, 100]}
      resolution={512}
      args={[10, 10]}
      mirror={0.5}
      mixBlur={6}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.4}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  );
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(
      vec.set(0,3,15),//state.mouse.x * 5, 3 + state.mouse.y * 2, 14
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}

export default App;
