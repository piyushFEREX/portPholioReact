import React, { useState } from 'react'
import Sections from './components/Sections'
import gsap from 'gsap';
const App = () => {
  const [rotator, setRotator] = useState(0)
  const dataArray = [
    { title: 'Something1', paragraph: 'Sample paragraph1' },
    { title: 'Something2', paragraph: 'Sample paragraph2' },
    { title: 'Something3', paragraph: 'Sample paragraph3' },
    { title: 'Something4', paragraph: 'Sample paragraph4' },
    { title: 'Something5', paragraph: 'Sample paragraph5' },
    { title: 'Something5', paragraph: 'Sample paragraph6' },
    { title: 'Something5', paragraph: 'Sample paragraph7' },
    { title: 'Something5', paragraph: 'Sample paragraph8' },
  ];
  // var delta = 0;
  // window.addEventListener('wheel',(e)=>{
  //   delta += e.deltaY
  //   console.log(delta);
  //   setRotator(delta/10)
  // })


  
  return (
    <div className='main w-screen h-screen bg-black overflow-hidden relative'>
    <div className='absolute h-9 z-50 w-9 top-0 left-0 bg-cyan-950' onClick={()=>{setRotator(rotator+1)}}>prev</div>
    <div className='absolute ml-12 h-9 z-[999] w-9 top-0 left-0 bg-cyan-950' onClick={()=>{setRotator(rotator-1)}}>next</div>
      <div className='second-parent w-screen h-[calc(100vw*0.618033)] '>
      {dataArray.map((data,index)=>{return<Sections  iteration={index} data={data} key={index} customItteration={rotator}/>})}
      {/* <Sections iteration={1} data={dataArray}/> */}
      </div>
    </div>
  )
}

export default App