import { featuredProducts } from "@/dataa";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className=" w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* ImageContainer */}
            <div className="relative flex-1 w-full p-6">
              {item.img && (
                <div className="relative flex-1 w-full h-full hover:rotate-45 transition-all duration-500">
                  <Image
                    className="object-contain"
                    src={item.img}
                    alt="Food Image"
                    fill
                  />
                </div>
              )}
            </div>
            {/* Text Container */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 text-center 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md mb-5">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
