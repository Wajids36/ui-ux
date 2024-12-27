"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/productlisting"); // Navigates to the "/productlisting" page
  };

  return (
    <>
<section>
  <div className="px-8 py-12 text-[#2A254B] mt-12">
    <h1 className="text-2xl font-semibold">Our Popular Products</h1>

    {/* Responsive grid layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {/* Product 1 */}
      <div className="w-full h-auto group">
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <Image
            src="/Product Card (2).png" // Ensure this file exists in the public folder
            alt="sofa"
            fill
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="py-2 font-medium">The Popular Suede Sofa</p>
          <p className="text-gray-600">$980</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="w-full h-auto group">
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <Image
            src="/Product Card.png" // Ensure this file exists in the public folder
            alt="Chair"
            fill
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="py-2 font-medium">The Dandy Chair</p>
          <p className="text-gray-600">$250</p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="w-full h-auto group">
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          <Image
            src="/Parent (3).png" // Ensure this file exists in the public folder
            alt="Chair"
            fill
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="py-2 font-medium">The Dandy Chair</p>
          <p className="text-gray-600">$250</p>
        </div>
      </div>
    </div>

    {/* View Products Button */}
    <div className="my-10 flex justify-center items-center">
      <button
        className="bg-[#F9F9F9] py-4 px-6 rounded-lg text-[#2A254B] hover:bg-gray-200 transition duration-300"
        onClick={handleNavigation}
      >
        View Products
      </button>
    </div>
  </div>
</section>
    </>
  );
};

export default Products;
