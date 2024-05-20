import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF('/model/loot/loot1-transformed.glb') as any;
	return (
		<group {...props} dispose={null}>
			<group name="Scene">
				<primitive object={nodes.loot_body_spine_00_middle} />
				<primitive object={nodes.loot_lip_sidecorner_00_left} />
				<primitive object={nodes.loot_lip_middletopside_00_left} />
				<primitive object={nodes.loot_waist_hip_00_left} />
				<primitive object={nodes.loot_arm_directioncontrol_00_left} />
				<primitive object={nodes.loot_arm_wrist_00_left} />
				<primitive object={nodes.loot_leg_ankle_00_left} />
				<primitive object={nodes.loot_leg_directioncontrol_00_left} />
				<primitive object={nodes.loot_lip_middle_00_top} />
				<primitive object={nodes.loot_lip_sidecorner_00_right} />
				<primitive object={nodes.loot_lip_middletopside_00_right} />
				<primitive object={nodes.loot_waist_hip_00_right} />
				<primitive object={nodes.loot_arm_directioncontrol_00_right} />
				<primitive object={nodes.loot_arm_wrist_00_right} />
				<primitive object={nodes.loot_leg_ankle_00_right} />
				<primitive object={nodes.loot_leg_directioncontrol_00_right} />
				<primitive object={nodes.neutral_bone} />
				<mesh
					name="glasses"
					geometry={nodes.glasses.geometry}
					material={materials.Material}
				/>
				<mesh
					name="loot_face_mask_00_front"
					geometry={nodes.loot_face_mask_00_front.geometry}
					material={nodes.loot_face_mask_00_front.material}
					rotation={[Math.PI / 2, 0, 0]}
				/>
				<skinnedMesh
					name="beanie"
					geometry={nodes.beanie.geometry}
					material={nodes.beanie.material}
					skeleton={nodes.beanie.skeleton}
				/>
				<skinnedMesh
					name="hair_low"
					geometry={nodes.hair_low.geometry}
					material={nodes.hair_low.material}
					skeleton={nodes.hair_low.skeleton}
				/>
				<skinnedMesh
					name="loot_body_arm_00_left"
					geometry={nodes.loot_body_arm_00_left.geometry}
					material={nodes.loot_body_arm_00_left.material}
					skeleton={nodes.loot_body_arm_00_left.skeleton}
				/>
				<skinnedMesh
					name="loot_body_arm_00_right"
					geometry={nodes.loot_body_arm_00_right.geometry}
					material={nodes.loot_body_arm_00_right.material}
					skeleton={nodes.loot_body_arm_00_right.skeleton}
				/>
				<group name="loot_body_head_00_main">
					<skinnedMesh
						name="kang_head"
						geometry={nodes.kang_head.geometry}
						material={nodes.kang_head.material}
						skeleton={nodes.kang_head.skeleton}
					/>
					<skinnedMesh
						name="kang_head_1"
						geometry={nodes.kang_head_1.geometry}
						material={nodes.kang_head_1.material}
						skeleton={nodes.kang_head_1.skeleton}
					/>
				</group>
				<skinnedMesh
					name="loot_body_leg_00_left"
					geometry={nodes.loot_body_leg_00_left.geometry}
					material={nodes.loot_body_leg_00_left.material}
					skeleton={nodes.loot_body_leg_00_left.skeleton}
				/>
				<skinnedMesh
					name="loot_body_leg_00_right"
					geometry={nodes.loot_body_leg_00_right.geometry}
					material={nodes.loot_body_leg_00_right.material}
					skeleton={nodes.loot_body_leg_00_right.skeleton}
				/>
				<skinnedMesh
					name="loot_face_eyes_00_both"
					geometry={nodes.loot_face_eyes_00_both.geometry}
					material={nodes.loot_face_eyes_00_both.material}
					skeleton={nodes.loot_face_eyes_00_both.skeleton}
				/>
				<skinnedMesh
					name="loot_mouth_teeth_00_inner"
					geometry={nodes.loot_mouth_teeth_00_inner.geometry}
					material={nodes.loot_mouth_teeth_00_inner.material}
					skeleton={nodes.loot_mouth_teeth_00_inner.skeleton}
				/>
				<skinnedMesh
					name="loot_mouth_tongue_00_inner"
					geometry={nodes.loot_mouth_tongue_00_inner.geometry}
					material={nodes.loot_mouth_tongue_00_inner.material}
					skeleton={nodes.loot_mouth_tongue_00_inner.skeleton}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/model/loot/loot1-transformed.glb');
