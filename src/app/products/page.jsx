"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  console.log(products);

  useEffect(() => {
    fetch("https://early-job-placement-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen font-sans p-10 bg-gradient-to-br from-green-50 to-green-100">
      <h1 className="text-4xl font-bold mb-10 text-center text-green-800 drop-shadow-md">
        All Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-green-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden p-5 ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-[20px] "
              />

              {/* Tag */}
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                {product.type}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-5 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                {product.name}
              </h2>

              <p className="text-lg font-bold text-green-800 mt-2">
                ৳ {product.pricePerUnit} / {product.unit}
              </p>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                <button className="w-1/2 bg-gradient-to-r from-green-600 to-green-800 text-white py-2 rounded-lg font-semibold shadow hover:opacity-90 transition-all duration-300">
                  Buy Now
                </button>

                <button
                  onClick={() => router.push(`/products/${product._id}`)}
                  className="w-1/2 bg-blue-600 text-white py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-all duration-300"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Add Product Button */}
      <div className="flex justify-center mt-14">
        <button
          onClick={() => router.push("/add-product")}
          className="px-8 py-3 bg-green-700 text-white text-lg font-semibold rounded-xl shadow hover:bg-green-800 transition-all duration-300"
        >
          + Add New Product
        </button>
      </div>
    </div>
  );
}
