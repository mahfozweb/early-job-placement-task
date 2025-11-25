"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function EditProductPage({ params }) {
  const router = useRouter();
  const { id } = use(params); // unwrap id from params

  const [product, setProduct] = useState({
    name: "",
    type: "",
    pricePerUnit: "",
    unit: "",
    quantity: "",
    location: "",
    image: "",
    description: "",
  });

  // Fetch product data by ID
  useEffect(() => {
    fetch(`http://localhost:4000/update/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:4000/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        alert("Product updated successfully!");
        router.push("/dashboard");
      } else {
        alert("Failed to update product.");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating product.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-start">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Edit Product</h1>

        <form className="space-y-4" onSubmit={handleUpdate}>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full p-2 border rounded"
            // required
          />

          <input
            type="text"
            name="type"
            value={product.type}
            onChange={handleChange}
            placeholder="Type"
            className="w-full p-2 border rounded"
            // required
          />

          <div className="flex gap-4">
            <input
              type="number"
              name="pricePerUnit"
              value={product.pricePerUnit}
              onChange={handleChange}
              placeholder="Price per unit"
              className="w-1/2 p-2 border rounded"
              //   required
            />
            <input
              type="text"
              name="unit"
              value={product.unit}
              onChange={handleChange}
              placeholder="Unit"
              className="w-1/2 p-2 border rounded"
              //   required
            />
          </div>

          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="w-full p-2 border rounded"
            // required
          />

          <input
            type="text"
            name="location"
            value={product.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-2 border rounded"
            // required
          />

          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 border rounded"
          />

          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
            rows={4}
          />

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}
