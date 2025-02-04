/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/OfficeAssets_free.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cactus_Pot.geometry}
        material={materials.M_Cactus_1024}
        position={[-0.051, 0.743, 0.876]}
        rotation={[0, -0.736, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cactus.geometry}
          material={materials.M_Cactus_1024}
          position={[0.01, 0.122, 0.014]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cactus_Soil.geometry}
          material={materials.M_Cactus_1024}
          position={[0.001, 0.123, -0.001]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keyboard.geometry}
        material={materials.M_Computer_2048}
        position={[0.488, 0.743, 0.925]}
        rotation={[0, 0.168, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Computer_Mouse.geometry}
        material={materials.M_Computer_2048}
        position={[0.533, 0.743, 0.53]}
        rotation={[0, -0.169, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Computer.geometry}
        material={materials.M_Computer_2048}
        position={[0.061, 0.743, 0.472]}
        rotation={[0, -0.387, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor.geometry}
        material={materials.M_Computer_2048}
        position={[0.103, 0.91, 0.502]}
        rotation={[0, -0.269, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FileBox_Black.geometry}
        material={materials.M_Filebox_1024}
        position={[-0.084, 0.743, 1.283]}
        rotation={[0, 1.531, 0]}
        scale={[1.096, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FileBox_Green.geometry}
        material={materials.M_Filebox_1024}
        position={[-0.075, 0.743, 1.398]}
        rotation={[-Math.PI, 1.512, -Math.PI]}
        scale={[1.096, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FileBox_Label_Finished.geometry}
        material={materials.M_Filebox_1024}
        position={[-0.084, 0.743, 1.281]}
        rotation={[0, 1.531, 0]}
        scale={[1.096, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FileBox_Label_Unsorted.geometry}
        material={materials.M_Filebox_1024}
        position={[-0.075, 0.743, 1.398]}
        rotation={[-Math.PI, 1.512, -Math.PI]}
        scale={[1.096, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Notepad.geometry}
        material={materials.M_Office_PinBoard_Photo_Notepad_1024}
        position={[0.363, 0.743, 1.741]}
        rotation={[-0.005, 1.388, 0.005]}
        scale={[0.381, 0.137, 0.381]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PhotoFrame_10x15.geometry}
        material={materials.M_Office_PinBoard_Photo_Notepad_1024}
        position={[-0.034, 0.743, 1.116]}
        rotation={[Math.PI / 2, 0, -1.814]}
        scale={0.381}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PinBoard.geometry}
        material={materials.M_Office_PinBoard_Photo_Notepad_1024}
        position={[-0.235, 1.321, 2.261]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.381}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper_Fax1.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[0.433, 0.031, -0.442]}
          rotation={[-0.02, -0.022, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper_Fax2.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[-0.441, 0.037, 0.073]}
          rotation={[-0.032, 0.035, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Paper_Note.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[-0.117, 0.031, -0.374]}
          rotation={[-0.047, -0.054, 0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Photo_Child.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[0.443, 0.03, 0.199]}
          rotation={[-0.068, 0.063, 0.004]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Photo_Family.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[-0.583, 0.03, -0.495]}
          rotation={[-0.034, -0.059, -0.003]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pin_Big1.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[0.192, 0.038, -0.433]}
          rotation={[-Math.PI / 2, -1.571, 0]}
          scale={2.627}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pin_Big2.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[-0.591, 0.04, -0.475]}
          rotation={[-Math.PI / 2, -1.571, 0]}
          scale={2.627}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pin_Big2001.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[0.683, 0.043, -0.418]}
          rotation={[-Math.PI / 2, -1.571, 0]}
          scale={2.627}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pin_Flat1.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[-0.437, 0.044, 0.092]}
          rotation={[-Math.PI / 2, -1.571, 0]}
          scale={2.627}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pin_Flat1001.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[0.483, 0.038, 0.226]}
          rotation={[-Math.PI / 2, -1.571, 0]}
          scale={2.627}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pin_Flat2.geometry}
          material={materials.M_Office_PinBoard_Photo_Notepad_1024}
          position={[-0.116, 0.037, -0.358]}
          rotation={[-Math.PI / 2, -1.571, 0]}
          scale={2.627}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cigarette_Normal.geometry}
        material={materials.M_Sigarettes_512}
        position={[0.481, 0.747, 1.504]}
        rotation={[1.002, 0.422, 0.998]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CigarettePack_Blue.geometry}
        material={materials.M_Sigarettes_512}
        position={[0.382, 0.752, 1.511]}
        rotation={[Math.PI, -1.189, -1.886]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ashtray.geometry}
        material={materials.M_Sigarettes_512}
        position={[0.487, 0.743, 1.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cigarette_Stub_Bent.geometry}
        material={materials.M_Sigarettes_512}
        position={[0.446, 0.764, 1.309]}
        rotation={[-1.448, -0.189, -2.328]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cigarette_Stub_Straight.geometry}
        material={materials.M_Sigarettes_512}
        position={[0.53, 0.766, 1.406]}
        rotation={[-1.697, -0.143, 0.343]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ashtray_Ash.geometry}
        material={materials.M_Sigarettes_512}
        position={[0.487, 0.752, 1.35]}
        scale={[1, 0.45, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CigarettePack_Brown.geometry}
        material={materials.M_Sigarettes_512}
        position={[0.451, 0.752, 1.464]}
        rotation={[0, -0.571, 1.574]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_Rough.geometry}
        material={materials.M_Table_2048}
        position={[0.213, 0.006, 1.171]}
      />
      <group position={[0.035, 0.743, 1.904]} rotation={[-Math.PI, 1.358, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
          material={materials.M_TapeRecorder_1024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_1.geometry}
          material={materials.M_TapeRecorder_Tape_Rotors_Glass_1024}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Microphone.geometry}
        material={materials.M_TapeRecorder_Tape_Rotors_Glass_1024}
        position={[0.445, 0.743, 1.958]}
        rotation={[0, 0.361, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vent.geometry}
        material={materials.M_Vent_1024}
        position={[-0.22, 2.009, 2.101]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FanSupport.geometry}
          material={materials.M_Vent_1024}
          position={[0.048, -0.008, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vent_Fan.geometry}
            material={materials.M_Vent_1024}
            rotation={[Math.PI / 3, 0, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nut.geometry}
          material={materials.M_Vent_1024}
          position={[-0.004, 0.157, 0.238]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vend_AirDuct.geometry}
          material={materials.M_Vent_1024}
          position={[-0.01, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vent_Cover_Frame.geometry}
          material={materials.M_Vent_1024}
          position={[0.133, 0.004, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vent_Cover.geometry}
            material={materials.M_Vent_1024}
            position={[0, -0.114, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vent_Filter.geometry}
            material={materials.M_Vent_1024}
            position={[-0.159, -0.004, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Vent_Filter_LinesH.geometry}
              material={materials.M_Vent_1024}
              position={[0.01, 0.006, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Vent_Filter_LinesV.geometry}
              material={materials.M_Vent_1024}
              position={[0.13, -0.019, 0.186]}
            />
          </mesh>
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Poster_Crumpled.geometry}
        material={materials.Poster_1024}
        position={[-0.246, 1.568, 1.317]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.619, 0.309, 0.619]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PhotoFrame2.geometry}
        material={materials.PhotoFrame_20x30_likeA4_512}
        position={[-0.241, 1.27, -0.097]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.992, 0.992, 1.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PhotoFrame1.geometry}
        material={materials.PhotoFrame_20x30_likeA4_512}
        position={[-0.241, 1.628, 0.369]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.992, 0.992, 1.118]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clipboard.geometry}
        material={materials.M_Clipboard_Notepad_1024}
        position={[0.996, 0.565, 0.619]}
        rotation={[-3.126, -1.002, -1.576]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Clipboard_Paper.geometry}
          material={materials.M_Clipboard_Notepad_1024}
          position={[0.006, -0.034, 0.001]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.381}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Notebook.geometry}
        material={materials.M_Clipboard_Notepad_1024}
        position={[0.235, 0.743, 1.171]}
        rotation={[0, 0.319, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair.geometry}
        material={materials.M_OfficeStool_Bin_2048}
        position={[0.923, 0.008, 0.77]}
        rotation={[Math.PI, -0.416, Math.PI]}
        scale={[1.235, 1, 1.235]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp01.geometry}
        material={materials['M_Lamps_CCTV_2048.001']}
        position={[-0.039, 0.743, 1.563]}
        rotation={[0, 0.454, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp02001.geometry}
          material={materials['M_Lamps_CCTV_2048.001']}
          position={[0, 0.061, 0]}
          rotation={[0, 0, 0.811]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lamp02002.geometry}
            material={materials['M_Lamps_CCTV_2048.001']}
            position={[0, 0.118, 0]}
            rotation={[0, 0, -0.976]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Lamp02.geometry}
              material={materials['M_Lamps_CCTV_2048.001']}
              position={[0, 0.279, 0]}
              rotation={[0, 0, -0.491]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Lamp_Holder001.geometry}
                material={materials['M_Lamps_CCTV_2048.001']}
                position={[0, 0.366, 0]}
                rotation={[0, 0, -0.603]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Lamp_Shade001.geometry}
                  material={materials['M_Lamps_CCTV_2048.001']}
                  position={[0, 0.083, 0]}
                />
              </mesh>
            </mesh>
          </mesh>
        </mesh>
      </mesh>
    </group>
  )
}

useGLTF.preload('/OfficeAssets_free.glb')