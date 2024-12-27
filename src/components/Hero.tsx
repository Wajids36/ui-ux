import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full bg-gray-50">
      <main className="flex flex-wrap items-center justify-center bg-[#2A254B] text-white gap-8 p-8 lg:flex-nowrap">
        {/* Text Section */}
        <div className="flex-1 px-6 py-8 lg:px-12">
          <h2 className="text-3xl font-bold mb-6 leading-snug lg:text-4xl">
            The furniture brand for the future,
            <br />
            with timeless designs
          </h2>
          <button className="bg-[#4E4D93] text-white py-3 px-6 rounded hover:bg-gray-500 transition duration-300">
            View Collection
          </button>
          <p className="mt-6 text-lg leading-relaxed">
            A new era in eco-friendly furniture with Avion, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg flex justify-center items-center">
          <Image
            src="/RightImage.png"
            width={600}
            height={700}
            alt="Furniture display"
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}
