import React, { useEffect, useRef } from 'react'
import './section.css'
const Sections = ({iteration,data,customItteration}) => {
  const finalIteration = iteration+customItteration
  const sec = useRef(null);
  const fixedRatio = 0.618033;
  const scale = Math.pow(fixedRatio, finalIteration);
  const rotation = 90*finalIteration
  // console.log(finalIteration,data,rotation,scale);
  useEffect(() => {
    // This code runs after the component is mounted or remounted
    if (sec.current) {
      sec.current.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    }
    // console.log('component mounted');
  }, [iteration,finalIteration]); 
  return (
    <div
    ref={sec} 
    className={`h-[calc(100vw*0.618033)]  w-[calc(100vw*0.618033)]  custom-transform-origin bg-cyan-400 border   items-center justify-center `}>
   <h1>{data.title}</h1><h6>{data.paragraph}</h6><br /> <h1>rotation is {rotation}</h1><br /> <h1>scale is {scale}</h1>
   <br />
   <h1>the usestate value is {customItteration}</h1>
   <div className='h-3 w-3 bg-red-600 positionn '>

   </div>
   </div>
  )
}

export default Sections