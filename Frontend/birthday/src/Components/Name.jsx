import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Name = () => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("image", image);

      const res = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        formData,
        { withCredentials: true }
      );

      toast.success("Submitted successfully 🎉");

      navigate("/birthday", {
        state: {
          username: res.data.user.username,
          imageUrl: `http://localhost:3000/uploads/${res.data.user.image}`,
        },
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Submission failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Birthday Card 🎂
        </h2>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Upload Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="w-full border rounded-lg p-2 cursor-pointer"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          Create Birthday Card 🎉
        </button>
      </form>
    </div>
  );
};

export default Name;
