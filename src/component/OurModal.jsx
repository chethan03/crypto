import React from 'react'
import {Canvas} from '@react-three/fiber'
import {useGLTF,PresentationControls,Stage} from '@react-three/drei'



function Modal(props){
  const {scene} =useGLTF('../bitcoin.glb')
  return <primitive object={scene} {...props} />
}

const OurModal = () => {
  return (
    <div>
<Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{position:'absolute',top:'8%'}}>
<color attach="background" args={['#101010']} />
  <ambientLight intensity={-1}/>
  <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI/4]}>
    <Stage environment={null}>
      <Modal scale={0.01}/>
    </Stage>
  </PresentationControls>

</Canvas>


    </div>
  )
}

export default OurModal