
import React, {useRef} from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows position={[0,0,-0.15]} ref={shadows} temporal frames={60} 
    alphaTest={0.3}  rotation={[Math.PI/2,0,0]}>

      <RandomizedLight amount={5} radius={9} ambient={0.4} intensity={1.15} position={[5,5,-10]}>

      </RandomizedLight>

    </AccumulativeShadows>
  )
}

export default Backdrop