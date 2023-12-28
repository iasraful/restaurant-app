"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always testy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we delever your product wherever you are in",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best food to share with your family",
    image: "/slide3.jpg",
  },
];
const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(2);

  //   useEffect(() => {
  //     const interval = setInterval(
  //       () =>
  //         setCurrentSlider((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //       1500
  //     );
  //     return () => clearInterval(interval);
  //   }, []);
  return (
    <div className="flex flex-col lg:flex-row    h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-fuchsia-50">
      {/* Text Container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:text-6xl xl:text:8xl md:p-10">
          {data[currentSlider].title}
        </h1>
        <button className="bg-red-500 text-white px-8 py-4">Order Now</button>
      </div>
      {/* Image Container */}
      <div className="h-1/2 lg:h-full w-full relative lg:w-1/2">
        <Image
          className="object-cover"
          src={data[currentSlider].image}
          alt="Slider Image"
          fill
        />
      </div>
    </div>
  );
};

export default Slider;
