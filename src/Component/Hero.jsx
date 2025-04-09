import React from 'react'
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { PiWechatLogo } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LiaPlaceOfWorshipSolid } from "react-icons/lia";
function Hero() {
    return (
        <div className='Hero w-full h-[70vh] bg-black mb-0 pb-0'>
            <div className='  mx-[20vh] h-[75vh]  py-4 flex-col'>

                <div className='w-full h-[40vh] rounded-2xl bg-gradient-to-r from-yellow-300 from-8%   via-white via-50% to-yellow-300 to-80%   flex items-center justify-around relative'>
                    <div className='absolute left-40 top-5 translate-x-4  '><img className='mb-0 ' src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/320x410/assets/images/astrologer_baba.webp" alt="" /></div>
                    <div className='  container  '>
                        <div className='flex-col absolute  top-20 space-x-16 space-y-2 '>
                            <div className='text-3xl'> <p><span><b>200+ Celebs</b> recommends Psychotalk </span></p></div>
                            <div className='text-4xl font-medium'> <h1>Chat With Astrologer</h1></div>
                            <div> <Link to="/chat"> <button className='w-[20vh] h-[6vh] rounded-3xl bg-black text-center text-white font-light '>Chat Now</button></Link></div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-2 mt-6 relative '>

                    <div className='rounded-xl  w-[41vh] h-[20vh]  bg-white  justify-center pl-20 space-y-2 shadow-inner shadow-slate-400 hover:shadow-slate-100 hover:shadow-lg hover:-translate-y-1 hover:box-border border-2 border-gray-400  '>
                        <div className='  w-full mt-4 items-center pl-6 '>
                            <div className=' w-[12vh] h-[12vh] bg-pink-300 rounded-full relative  flex justify-center content-center  '>
                                <span className='items-center top-3 relative'><PiWechatLogo size={65} color='white' /> </span>
                            </div>
                        </div>
                        <Link to='/chat'> <div className=' text-lg ' ><span> Chat with Astrologer</span></div></Link>
                    </div>
                    <div className='rounded-xl  w-[41vh] h-[20vh]  bg-white  justify-center pl-20 space-y-2 shadow-inner shadow-slate-400 hover:shadow-slate-100 hover:shadow-lg hover:-translate-y-1 hover:box-border border-2 border-gray-400  '>
                        <div className='  w-full mt-4 items-center pl-6 '>
                            <div className=' w-[12vh] h-[12vh] bg-emerald-300 rounded-full relative  flex justify-center content-center  '>
                                <span className='items-center top-3 relative'><FiPhoneCall  size={65} color='white' /> </span>
                            </div>
                        </div>
                        <Link to='/chat'> <div className=' text-lg ' ><span> Call with Astrologer</span></div></Link>
                    </div>
                    <div className='rounded-xl  w-[41vh] h-[20vh]  bg-white  justify-center pl-20 space-y-2 shadow-inner shadow-slate-400 hover:shadow-slate-100 hover:shadow-lg hover:-translate-y-1 hover:box-border border-2 border-gray-400  '>
                        <div className='  w-full mt-4 items-center pl-6 '>
                            <div className=' w-[12vh] h-[12vh] bg-blue-300 rounded-full relative  flex justify-center content-center  '>
                                <span className='items-center top-3 relative'><MdOutlineShoppingCart size={65} color='white'/> </span>
                            </div>
                        </div>
                       <Link to='/chat'> <div className='items-center text-lg ' ><span> Astromall Shop</span></div></Link>
                    </div>
                    <div className='rounded-xl  w-[41vh] h-[20vh]  bg-white  justify-center pl-20 space-y-2 shadow-inner shadow-slate-400 hover:shadow-slate-100 hover:shadow-lg hover:-translate-y-1 hover:box-border border-2 border-gray-400  '>
                        <div className='  w-full mt-4 items-center pl-6 '>
                            <div className=' w-[12vh] h-[12vh] bg-orange-300 rounded-full relative  flex justify-center content-center  '>
                                <span className='items-center top-3 relative'><LiaPlaceOfWorshipSolid size={65} color='white'/> </span>
                            </div>
                        </div>
                       <Link to='/chat'> <div className=' text-lg ' ><span> Book A Pooja</span></div></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero