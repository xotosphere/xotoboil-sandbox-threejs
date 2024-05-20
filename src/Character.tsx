import React, { useRef, useEffect, useState, Fragment } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CharacterCameraMovement from './functions/CharacterCameraMovement';
import CharacterMouseFollow from './functions/CharacterMouseFollow';
import { GroupProps } from '@react-three/fiber';

/**
 * @todo Replace with new paths
 */
export function Model(props: GroupProps) {
	const { nodes, materials } = useGLTF('/model/loot/loot1.glb') as any;

	// main states
	const [loaded, setLoaded] = useState(false);

	// mesh textures
	const loader = new THREE.TextureLoader();
	const armTexture = loader.load('/textures/wooden.png');
	const hatTextue = loader.load('/textures/red.png');
	const starTexture = loader.load('/textures/star.png');
	const eyeTexture = loader.load('/textures/eye.png');

	// eye wrap
	eyeTexture.wrapS = THREE.RepeatWrapping;
	eyeTexture.wrapT = THREE.RepeatWrapping;
	eyeTexture.repeat.set(1, 1);

	// mesh refs
	const meshRef = useRef(nodes.feet_low_Kang_low011);
	const leftEyeRef = useRef();
	const rightEyeRef = useRef();
	const bodyRef = useRef();
	const headRef = useRef();

	useEffect(() => {
		// mesh material
		const handMaterial = new THREE.MeshBasicMaterial({
			map: armTexture,
			color: 0xffffff
		});
		const hatmaterial = new THREE.MeshBasicMaterial({
			map: hatTextue,
			color: 0xffffff
		});
		const starMaterial = new THREE.MeshBasicMaterial({
			map: starTexture,
			color: 0xffffff
		});
		const corneaMaterial = new THREE.MeshBasicMaterial({ map: eyeTexture });

		// matterial application
		nodes.hands_low_Kang_low015.material = handMaterial;
		nodes.beanie_Cube001.material = hatmaterial;
		nodes.Kang_low.material = starMaterial;
		nodes.feet_low_Kang_low011.material = handMaterial;
		nodes.DMAD_cornea_l_Sphere010.material = corneaMaterial;

		// suggested replace
		/* 
		nodes.loot_body_arm_00_left.material = handMaterial;
		nodes.loot_body_arm_00_right.material = handMaterial;
		nodes.loot_body_head_00_main.material = starMaterial;
		nodes.loot_body_leg_00_left.material = handMaterial;
		nodes.loot_body_leg_00_right.material = handMaterial;
		nodes.loot_eye_eyeball_00_left.material = corneaMaterial;
		nodes.loot_eye_eyeball_00_right.material = corneaMaterial;
		nodes.beanie.material = hatmaterial;
		*/

		setLoaded(true);
	}, [armTexture, nodes.hands_low_Kang_low015.material]);

	// keys used
	const handleKeyDown = (event) => {
		if (event.key === 'w') meshRef.current.rotation.y += 0.1;
	};
	window.addEventListener('keydown', handleKeyDown);

	return (
		{ loaded } && (
			<Fragment>
				<group {...props} dispose={null}>
					<ambientLight intensity={0.5} />{' '}
					<pointLight position={[10, 10, 10]} />
					<group ref={bodyRef}>
						<mesh
							geometry={nodes.feet_low_Kang_low011.geometry}
							material={nodes.feet_low_Kang_low011.material}
							position={[0, 0, 0.1]}
							ref={meshRef}
						/>
						<mesh
							geometry={nodes.hands_low_Kang_low015.geometry}
							material={nodes.hands_low_Kang_low015.material}
						/>
						<mesh
							geometry={nodes.Properties_Text.geometry}
							material={nodes.Properties_Text.material}
						/>
					</group>
					<group ref={headRef}>
						<mesh
							/* nodes.loot_eye_eyeball_00_left */
							position={[-0.2, 0.95, 0.45]}
							ref={leftEyeRef}
							geometry={nodes.DMAD_cornea_r_Sphere005.geometry}
							material={nodes.DMAD_cornea_l_Sphere010.material}
						/>
						<mesh
							/* nodes.loot_eye_eyeball_00_right */
							position={[0.2, 0.95, 0.45]}
							ref={rightEyeRef}
							geometry={nodes.DMAD_cornea_r_Sphere005.geometry}
							material={nodes.DMAD_cornea_l_Sphere010.material}
						/>
						<mesh
							/* nodes.beanie */
							geometry={nodes.beanie_Cube001.geometry}
							material={nodes.beanie_Cube001.material}
						/>
						<mesh
							/* nodes.glasses */
							geometry={nodes.glasses_Circle003.geometry}
							material={nodes.glasses_Circle003.material}
						/>
						<mesh
							geometry={nodes.mouth_low_Kang_low002.geometry}
							material={nodes.mouth_low_Kang_low002.material}
						/>
						<mesh
							geometry={nodes.hair_low_Kang_low031.geometry}
							material={nodes.hair_low_Kang_low031.material}
						/>
						<mesh
							/* loot_face_mask_00_front */
							geometry={nodes.mask_low_Kang_low033.geometry}
							material={nodes.mask_low_Kang_low033.material}
						/>
						<mesh
							/* loot_mouth_teeth_00_inner */
							geometry={nodes.mouth_low001_Kang_low003.geometry}
							material={nodes.mouth_low001_Kang_low003.material}
						/>
						<mesh
							/* loot_body_head_00_main */
							geometry={
								nodes['kangVF_head_(1)_kangVF_head_(1)002'].geometry
							}
							material={
								nodes['kangVF_head_(1)_kangVF_head_(1)002'].material
							}
						/>
						<mesh
							/* hair_low */
							geometry={nodes.hair_low001_Kang_low001.geometry}
							material={nodes.hair_low001_Kang_low001.material}
						/>
						<mesh
							geometry={nodes.Kang_low.geometry}
							material={nodes.Kang_low.material}
						/>
					</group>
				</group>
				<CharacterMouseFollow
					headRef={headRef}
					leftEyeRef={leftEyeRef}
					rightEyeRef={rightEyeRef}
					bodyRef={bodyRef}
				/>
				<CharacterCameraMovement meshRef={meshRef} />
			</Fragment>
		)
	);
}
useGLTF.preload('/model/loot/loot1.glb');
