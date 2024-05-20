import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

export default function CharacterMouseFollow({ headRef, bodyRef, leftEyeRef, rightEyeRef }) {
  const pointer = { x: 0, y: 0 };

  let targetY = 0;
  let targetX = 0;

  window.addEventListener("mousemove", (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  useFrame(() => {
    if (headRef.current) {
      targetY = -pointer.y < 0.4 ? -pointer.y > -0.1 ? -pointer.y * 0.8 + 0.4 : -pointer.y * 0.8 : -pointer.y * 0.9;
      targetX = pointer.x < 0.2 && pointer.x > -0.4 ? pointer.x * 0.1 + 0.3 : pointer.x * 0.8;
      headRef.current.rotation.y = THREE.MathUtils.lerp( headRef.current.rotation.y, targetX * 0.7, 0.02); // horizontal
      headRef.current.rotation.x = THREE.MathUtils.lerp( headRef.current.rotation.x, targetY * 0.3, 0.02); // vertical
      leftEyeRef.current.rotation.y = THREE.MathUtils.lerp( leftEyeRef.current.rotation.y, targetX * 0.5, 0.03); // horizontal
      leftEyeRef.current.rotation.x = THREE.MathUtils.lerp( leftEyeRef.current.rotation.x, targetY * 0.2, 0.03); // vertical
      rightEyeRef.current.rotation.y = THREE.MathUtils.lerp( rightEyeRef.current.rotation.y, targetX * 0.5, 0.03); // horizontal
      rightEyeRef.current.rotation.x = THREE.MathUtils.lerp( rightEyeRef.current.rotation.x, targetY * 0.2, 0.03); // vertical
      bodyRef.current.rotation.y = THREE.MathUtils.lerp( bodyRef.current.rotation.y, targetX * 0.4, 0.02); // horizontal
      bodyRef.current.rotation.x = THREE.MathUtils.lerp( bodyRef.current.rotation.x, targetY * 0.15, 0.02); // vertical
    }
  });

  useEffect(() => {
    if (rightEyeRef.current) {
      rightEyeRef.current.geometry.center();
      leftEyeRef.current.geometry.center();
    }
  }, [rightEyeRef.current]);
  return null;
}
