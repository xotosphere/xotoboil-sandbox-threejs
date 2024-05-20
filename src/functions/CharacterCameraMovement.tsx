import React from "react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useState } from "react";
import { Html } from "@react-three/drei";

export default function CharacterCameraMovement({ meshRef }) {
  const [cameraFar, setCameraFar] = useState(false);
  const { camera } = useThree();
  
  // character movement handler
  const handleCharacterCameraMovement = () => {
    gsap.to(camera.position, { z: cameraFar ? 5 : 15, x: cameraFar ? 0 : 10, y: cameraFar ? -1 : 5, duration: 1.5, onUpdate: () => { camera.lookAt(0, 0, 0); }});
    setCameraFar(!cameraFar);
  };

  const handleRigMovement = () => {
    
    // create timeline
    const tl = gsap.timeline();
    const t2 = gsap.timeline();
    
    // set timeline
    tl.to(meshRef.current.rotation, { x: -0.5, duration: 1 }).to( meshRef.current.rotation, { x: 0, duration: 1 });
    t2.to(meshRef.current.position, { z: 0.3, duration: 1 }).to( meshRef.current.position, { z: 0, duration: 1 });
  };
  
  return (
    <Html style={{ width: "100vw" }}> 
      <div style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", }} > 
        <button style={{ marginBottom: ".5rem" }} onClick={handleCharacterCameraMovement}> {" "} GSAP Camera Movement{" "} </button>
        <button onClick={handleRigMovement}>Rig Movement</button> 
      </div>
    </Html>
  );
}
