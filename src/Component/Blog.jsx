import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Cards() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
        <div className="w-full h-fit bg-slate-50 flex flex-col justify-center items-center   lg:px-20 lg:py-20 gap-6 ">
            <h1 className='text-4xl text-black  text-center '>LATEST FROM BLOG</h1>
            <p className='text-xl text-center ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxi</p>

            <div className=' w-full h-fit p-10 '>
            <Slider {...settings}>
                {
                    data.map((item, index) => (
                        <div key={index} className=" p-10 rounded-xl flex flex-col justify-center items-center   hover:shadow-2xl cursor-pointer ">
                            <div className=" hover:shadow-2xl cursor-pointer " ><img className='rounded-3xl w-[60vh] h-[30vh]' src={item.img} alt="" /></div>
                            <div>
                                <div className='flex flex-col justify-center items-center gap-6 mt-4'>
                                    <p className='line-clamp cursor-pointer' >{item.topic}</p>

                                    <div className=' flex justify-between items-center font-light gap-[30vh] '>
                                        <div><p className=''>Topic</p></div>
                                        <div><p>Date</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
               </Slider> 

            </div>
        </div>

    )
}

const data = [
    {
        img: 'https://aws.astrotalk.com/images/7f9237e7-88eb-4aa7-b993-77b252f96735.png',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        img: 'https://aws.astrotalk.com/images/dfb8a7e6-4fc7-4841-91a1-e785401fd190.jpg',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        img: 'https://aws.astrotalk.com/images/8803fb32-453f-4531-8a48-3ed170d4a117.png',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        img: 'https://aws.astrotalk.com/images/eaa3d27e-38f6-49de-9024-47ee6cc1e3bc.jpg',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        img: 'https://aws.astrotalk.com/images/e9e85f59-ac37-42bc-a283-52c2ce2dd5ff.jpg',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        img: 'https://aws.astrotalk.com/images/3e58d9c6-ee3e-4289-83e4-cb3e2e26597c.jpg',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },
    {
        img: 'https://aws.astrotalk.com/images/dcade233-c53c-4f29-a78b-32ee2b7e9d70.jpg',
        topic: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam quo vero natus incidunt deserunt necessitatibus illum? Fuga, voluptatem! Deleniti nesciun"
    },

]
export default Cards