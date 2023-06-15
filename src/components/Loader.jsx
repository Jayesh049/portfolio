// this is the loader function for our 3d model
import React from 'react'
import { Html , useProgress } from '@react-three/drei';
const Loader = () => {
  // useProgress used to tell the loading time of the 3d object
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p 
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight:800,
          marginTop: 40
        }}
        // this is giving loading time to us for desktop 3d image
        >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader