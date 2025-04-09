import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className='w-full m-0 p-0  bg-zinc-100 h-[15vh] bottom-2 border-b-2 border-black'>
        <div className='mx-[20vh] bg-zinc-100 h-[15vh] flex justify-between items-center capitalize bottom-2 border-b-2 border-black' >
            <div className="logo mb-6 "> 
            <Link to="/"><img className='h-20 w-25 mx-3' src="src/assets/logo.png" alt="Img logo" /></Link>
                </div>
            <div className="menu grid justify-items-end">
                <div className="menu1 font-black flex-row space-x-11 ">
                {["Free kundali","Kundali Matching","Horoscope","Language" ].map((item,index)=>
            (<a key={index} className='font-light ' >{item}</a>))}
            <button className='font-semibold bg-yellow-400 rounded-xl h-8 w-[10vh] mx-5 drop-shadow-lg hover:drop-shadow-2xl '>Contact</button>
                </div>
                <div className="menu2 flex space-x-11 mr-2 mt-2 ">
                {["Chat With Astrologers","Talk WIth Astrologer","Book a Pooja ","Pschotalk Mall","Psychotalk Store","Blog" ].map((item,index)=>
            (<a key={index} className='font-light ' >{item}</a>))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar