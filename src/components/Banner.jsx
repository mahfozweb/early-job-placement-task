"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative w-full h-[80vh]">
      <Image
        src="/banner.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
        <h1 className="text-7xl font-extrabold text-white hover:text-yellow-300 transition-all duration-300">
          Welcome to the Shop
        </h1>

        <p className="mt-5 text-3xl font-bold text-gray-200 hover:text-blue-300 focus:text-red-400 transition-all duration-300">
          Find the best deals today
        </p>

        <Link
          href="/products"
          className="mt-8 px-8 py-3 bg-white/80 text-black font-semibold rounded-lg hover:bg-yellow-300 hover:text-black focus:ring-4 focus:ring-yellow-500 transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
