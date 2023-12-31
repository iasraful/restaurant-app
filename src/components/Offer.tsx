import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row  md:justify-between  md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl ">
          Delecjous Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          This is a demo whre the offer price will be show and there have a
          coutndown on that time people can get buy through the offer price?
        </p>
        <span className="text-yellow-400 font-bold text-2xl md:text-3xl xl:text-4xl ">
          24:55:47
        </span>
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      {/* Image Container  */}
      <div className="flex-1 w-full relative md:h-full">
        <Image
          className="object-contain"
          src="/offerProduct.png"
          alt="Food Image"
          fill
        />
      </div>
    </div>
  );
};

export default Offer;
