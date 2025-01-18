import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import { image } from 'motion/react-client';
import Lightbox from './Lightbox';
export default function Slider({images,noOfCols}) {
  const [x,setX] = useState(0);
  const [cols,setCols] = useState(noOfCols);
  const [active,setActive] = useState(-1);

  const size=images.length;

  const [noOfNext,setNoOfNext] = useState(size - cols);
  const [noOfPrev,setNoOfPrev] = useState(0);
  const widthOfCol = innerWidth / cols;
  const parentWidth = widthOfCol * size;

  console.log(widthOfCol)
  console.log(innerWidth);
  function closeLightbox(){
    setActive(-1);
  }
  function handleNext(){
    setX(x - Math.floor(widthOfCol));
    setNoOfNext(noOfNext - 1);
    setNoOfPrev(noOfPrev + 1)
  }
  function handlePrev(){
    setX(x + Math.floor(widthOfCol));
    setNoOfPrev(noOfPrev - 1);
    setNoOfNext(noOfNext + 1)
  }
  useEffect(()=>{
    handleResize();
    function handleResize(){
        if(innerWidth <= 500){
            setCols(1);
        }else if(innerWidth <= 720){
            setCols(2);
        }
    }   
    window.addEventListener("resize",handleResize)
    return ()=> window.removeEventListener('resize',handleResize);
    },[])

  useEffect(()=>{
    setNoOfNext(size-cols);
  },[cols])
  return (
    <>
        <div style={{transform:`translateX(${x}px)`,width:`${parentWidth}px`}} className="overflow-hidden flex transition-transform duration-500">
                {images.map((image,index)=> <div key={index} style={{width:widthOfCol}} className='px-5'><button className='bg-blue-500 text-white w-full' onClick={()=>setActive(index)}><img src={image} alt="Gallery Image" /></button> </div> )}
        </div>
        <button disabled={noOfPrev == 0} className='bg-blue-900 py-3 px-5 text-white' onClick={handlePrev}>Prev</button>
        <button disabled={noOfNext == 0} className='bg-blue-900 py-3 px-5 text-white' onClick={handleNext}>next</button>
           
            <AnimatePresence>
                {active >=0 &&  <Lightbox images={images} active={active} closeLightbox={closeLightbox}/>}
            </AnimatePresence>
    
    </>
  )
}
