import React from 'react'
import SemButtons from '../../SemButtons'
import { Link } from 'react-router-dom'


const FE24 = () => {
  return (
    <>
    {/* <h1 className="pl-0 md:pl-20 text-xl md:text-2xl font-bold">Subject Name</h1> */}
    <div className='Subject'>
      <SemButtons title={<span style={{ fontSize: "18px" }}>ENGINEERING PHYSICS</span>} url="Engineering-Physics"/>
      <SemButtons title={<span style={{ fontSize: "18px"}}>ENGINEERING MATHEMATICS - I</span>} url="Engineering-Mathematics-I"/>
      <SemButtons title={<span style={{ fontSize: "18px"}}>ENGINEERING CHEMISTRY</span>} url="Engineering-Chemistry"/>
      <SemButtons title={<span style={{ fontSize: "18px"}}>BASIC ELECTRONICS ENGINEERING</span>} url="Basic-Electronics-Engineering"/>
      <SemButtons title={<span style={{ fontSize: "18px"}}>BASIC ELECTRICAL ENGINEERING</span>} url="Basic-Electrical-Engineering"/>
      <SemButtons title={<span style={{ fontSize: "18px"}}>ENGINEERING GRAPHICS</span>} url="Engineering-Graphics"/>
      <SemButtons title={<span style={{ fontSize: "18px"}}>ENGINEERING MECHANICS</span>} url="Engineering-Mechanics"/>
      <SemButtons title={<span style={{ fontSize: "18px"}}>FUNDAMENTALS OF PROGRAMMING LANGUAGES</span>} url="Fundamentals-Of-Programming-Languages"/>
      
    </div></>
    
  )
}

export default FE24
