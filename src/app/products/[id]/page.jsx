// src/app/products/[id]/page.jsx

export default async function ProductDetails({ params }) {
  const { id } = await params;
  console.log("id is ", id);

  // Server-side fetch
  const res = await fetch(
    `https://early-job-placement-server.vercel.app/products/${id}`
  );
  const product = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-10 font-sans">
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row gap-8">
        {/* Left: Large Image */}
        <div className="md:w-1/2 h-full flex justify-center items-center bg-gray-100 p-6">
          <img
            src={product.image || "https://via.placeholder.com/400"}
            alt={product.name}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Product Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-start">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>

          <p className="text-xl text-green-700 font-semibold mb-2">
            Price: ৳ {product.pricePerUnit} / {product.unit}
          </p>

          <p className="text-gray-700 mb-2">
            <strong>Type:</strong> {product.type}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Quantity:</strong> {product.quantity}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Location:</strong> {product.location}
          </p>

          {/* Product Description */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-inner mt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="flex-1 bg-gradient-to-r from-green-600 to-green-800 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-300">
              Buy Now
            </button>
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
