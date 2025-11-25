"use client";

import { useState } from "react";

export default function AddCrops() {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    pricePerUnit: "",
    unit: "",
    quantity: "",
    description: "",
    location: "",
    image: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://early-job-placement-server.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (data.insertedId) {
      alert("Crop added successfully!");
      // Reset the form
      setFormData({
        name: "",
        type: "",
        pricePerUnit: "",
        unit: "",
        quantity: "",
        description: "",
        location: "",
        image: "",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 rounded-xl shadow-lg bg-gradient-to-r from-green-200 via-green-100 to-yellow-100">
      <h2 className="text-3xl font-bold mb-5 text-green-700">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Crop Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium">Type</label>
          <select
            name="type"
            required
            className="w-full p-2 border rounded"
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option>Vegetable</option>
            <option>Fruit</option>
            <option>Grain</option>
            <option>Herb</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Price per Unit</label>
            <input
              type="number"
              name="pricePerUnit"
              required
              className="w-full p-2 border rounded"
              value={formData.pricePerUnit}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-medium">Unit</label>
            <select
              name="unit"
              required
              className="w-full p-2 border rounded"
              onChange={handleChange}
            >
              <option value="">Select Unit</option>
              <option>kg</option>
              <option>ton</option>
              <option>bag</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium">Estimated Quantity</label>
          <input
            type="number"
            name="quantity"
            required
            className="w-full p-2 border rounded"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            rows="3"
            required
            className="w-full p-2 border rounded"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            required
            className="w-full p-2 border rounded"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            required
            className="w-full p-2 border rounded"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-green-600 to-green-800 hover:opacity-90"
        >
          Submit Crop
        </button>
      </form>
    </div>
  );
}
