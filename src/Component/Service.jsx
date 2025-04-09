import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slider.css';
import '../index.css';
function Service() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className=" h-fit bg-white text-black mt-0 pt-0    ">
            <div className=' relative ml-24 mr-24'>

                <div className=' font-bold text-3xl mt-3 text-gray-700 tracking-wide text-center m-auto block items-center  uppercase' >Complimentary astrology services</div>

                <div className='m-auto  w-full  inline-block p-5  '>
                    <Slider {...settings}  >
                        {
                            data.map((item, index) => (
                                <div key={index} className="box  p-2  m-4 h-[40vh]  w-[35vh] rounded-xl  border-2 border-slate-400  inline-block box-border    space-y-10 hover:shadow-2xl hover:translate-y-1 hover:shadow-slate-500 shadow-inner  shadow-indigo-400 cursor-pointer ">
                                    <div className=" cursor-pointer  " ><img className='rounded-full w-[15vh] h-[15vh] m-auto block items-center mt-4' src={item.img} alt="" /></div>
                                    <div>
                                        <div className='flex flex-col justify-center items-center gap-2 mt-4'>
                                            <div className='text-lg font-bold'>{item.name}</div>

                                            <p className='line-clamp-3 cursor-pointer  text-center text-wrap' >{item.topic}</p>
                                        </div>


                                    </div>
                                </div>
                            ))
                        }
                    </Slider>

                </div>

            </div>
            <div className='w-full h-32  items-center content-center  flex justify-center bg-gradient-to-t from-black to-yellow-300    '>
                <div className='  flex justify-between  gap-44 '>
                    <div className='  text-white flex flex-col items-center '>
                        <div className='text-5xl font-semibold'>4568+</div>
                        <div className='text-sm'>Total Astrologer</div>
                    </div>
                    <div className='  text-white flex flex-col items-center  '>
                        <div className='text-3xl tracking-tighter font-semibold '><span className='text-5xl'>1146</span>  Million Minutes</div>
                        <div className='text-sm'>Total Chat/Call per minutes</div>
                    </div>
                    <div className='  text-white flex flex-col items-center  '>
                        <div className='text-3xl font-semibold tracking-tighter space-x-1'><span className='text-5xl'>78.6</span> Million </div>
                        <div className='text-sm'>Total Customer</div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

const data = [
    {
        name: 'Harsh',
        img: 'https://aws.astrotalk.com/images/7f9237e7-88eb-4aa7-b993-77b252f96735.png',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        name: 'Sarif',
        img: 'https://aws.astrotalk.com/images/dfb8a7e6-4fc7-4841-91a1-e785401fd190.jpg',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        name: 'Deleep',
        img: 'https://aws.astrotalk.com/images/8803fb32-453f-4531-8a48-3ed170d4a117.png',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        name: 'Radha',
        img: 'https://aws.astrotalk.com/images/eaa3d27e-38f6-49de-9024-47ee6cc1e3bc.jpg',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        name: 'Mushkan',
        img: 'https://aws.astrotalk.com/images/e9e85f59-ac37-42bc-a283-52c2ce2dd5ff.jpg',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        name: 'Hari',
        img: 'https://aws.astrotalk.com/images/3e58d9c6-ee3e-4289-83e4-cb3e2e26597c.jpg',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        name: 'Jani',
        img: 'https://aws.astrotalk.com/images/dcade233-c53c-4f29-a78b-32ee2b7e9d70.jpg',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },

]
export default Service