import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Slider from './Slider'

function App() {
  return (
    <div className='h-screen flex flex-col justify-center items-start overflow-hidden'>
      <Slider  images={['/Gallery-01.jpg','/Gallery-02.jpg','/Gallery-03.jpg','/Gallery-04.jpg','/Gallery-05.jpg','/Gallery-06.jpg','/Gallery-07.jpg','/Gallery-08.jpg']} noOfCols={5}/>
    </div>
  )
}

export default App
