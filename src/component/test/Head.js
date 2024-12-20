import React, { useState } from 'react'
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import "./Head.css"
const Head = () => {
    const[open,setopen]=useState(false)


const toogle=()=>{
    setopen(!open)
}





  return (
    <div className="head">

        <div className="logo">
            <h2>Logo</h2>
        </div>
        <div className={`center ${open ? "active " :" "}`}>

            <ul>
                <li><a href='/'>Home</a> </li>
                <li><a href='/'>Home</a> </li>
                <li><a href='/'>Home</a> </li>
                <li><a href='/'>Home</a> </li>
                
            </ul>
            <IoMdClose   onClick={toogle} className='close'/>

        </div>
        <div className="right">
            <button className='btn btn-primary'>login </button>

        </div>
        <div className='bar' >
        <HiOutlineBars3BottomRight onClick={toogle} />

        </div>
      
    </div>
  )
}

export default Head
