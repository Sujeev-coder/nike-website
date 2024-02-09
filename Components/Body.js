
import Slider from "react-slick";
import Image from 'next/image';
import React, { useState } from 'react';
import download1 from "@/app/download (1).jpg"
import download2 from "@/app/download (2).jpg"
import download3 from "@/app/download (3).jpg"
import download4 from "@/app/download (4).jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Body = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const shoes = [

    {

      name: "Air Max 270",
      img: download1,
      price: "170$"
    },

    {

      name: "Air Max 90",
      img: download2,
      price: "170$"
    },

    {

      name: "Air Max Dawn",
      img: download3,
      price: "170$"
    },

    {

      name: "Air Max Pulse",
      img: download4,
      price: "170$"
    }




  ]

  return (
    <div>
      <div>
        <div>
          <div className='w-70 h-[300px]'><h1 className='text-7xl'>Unleash Your Potential With Nike</h1></div>
        </div>
      </div>

      <div >

      <div>

      <Slider {...settings}>

{shoes.map((s, index) => (
  <div key={index}>
    <div>
      <Image src={s.img} width={390} height={50} />
      </div>
      <div className='text-center'>

        <p>{s.name}</p>
        <p>{s.price}</p>
      </div>
    


  </div>
))}

</Slider>

</div>



      </div>

<div className="mt-10 ml-40 ">

<div className=""><button className="p-1 bg-black text-white rounded-lg">Shop Now</button></div>

</div>
      <div className='mt-10 ml-5 grid items-center justify-start  text-center'>

     
     <div><h1 className='text-xl w-64'>Join us on the mat for a live workout or session on the Nike Training Club app.</h1></div>

      </div>
    </div>
  );
}

export default Body;
