import Image from "next/image";
import React from "react";

const Outlets = () => {
  return (
    <>
      <section>
        <div className="py-12 text-[#2A254B] mt-12">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="w-full md:w-1/2 px-6 md:px-12 py-8 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold leading-relaxed">
                  From a studio in London to a global brand <br /> with over 400
                  outlets
                </h1>
                <p className="py-6 text-lg md:text-xl leading-relaxed text-gray-700">
                  When we started Avion, the idea was simple. Make high-quality{" "}
                  <br /> furniture affordable and available for the mass market.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Handmade and lovingly crafted furniture and homeware is what
                  we live, <br />
                  breathe, and design, so our Chelsea boutique became the hotbed
                  for the <br />
                  London interior design community.
                </p>
              </div>
              <div className="mt-8 flex justify-start">
                <button className="bg-[#F9F9F9] py-4 px-6 rounded-lg text-[#2A254B] shadow-md hover:bg-gray-200 transition duration-300">
                  Get in touch
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 px-6 md:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/Image.png" // Ensure the image exists in the public folder
                  height={800}
                  width={800}
                  alt="chair"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Outlets;
