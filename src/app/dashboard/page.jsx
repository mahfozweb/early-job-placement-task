"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  // Fetch products from API
  useEffect(() => {
    fetch("https://early-job-placement-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(
        `https://early-job-placement-server.vercel.app/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setProducts(products.filter((p) => p._id !== id));
        alert("Product deleted successfully!");
      } else {
        alert("Failed to delete product.");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting product.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
        Manage Products
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="text-left py-3 px-4">#</th>
              <th className="text-left py-3 px-4">Image</th>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Price</th>
              <th className="text-left py-3 px-4">Quantity</th>
              <th className="text-left py-3 px-4">Location</th>
              <th className="text-center py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {products.map((product, index) => (
              <tr
                key={product._id}
                className="border-b hover:bg-gray-100 transition-colors"
              >
                <td className="py-3 px-4">{index + 1}</td>

                {/* Small Rounded Image */}
                <td className="py-3 px-4">
                  <img
                    src={product.image || "https://via.placeholder.com/50"}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-full border shadow-sm"
                  />
                </td>

                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">
                  ৳ {product.pricePerUnit} / {product.unit}
                </td>
                <td className="py-3 px-4">{product.quantity}</td>
                <td className="py-3 px-4">{product.location}</td>
                <td className="py-3 px-4 flex justify-center gap-2">
                  <button
                    onClick={() => router.push(`/products/${product._id}`)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    View
                  </button>
                  <button
                    onClick={() => router.push(`/edit-product/${product._id}`)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Product Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => router.push("/add-product")}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors"
        >
          Add New Product
        </button>
      </div>
    </div>
  );
}
