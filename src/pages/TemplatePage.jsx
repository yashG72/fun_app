import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const TemplatePage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCopy = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => toast.success("Link copied to clipboard!"))
      .catch(() => toast.error("Failed to copy link"));
  };

  useEffect(() => {
  axios
    .get(`http://localhost:5000/api/apology/${id}`)
    .then((res) => {
      setData(res.data);
      setLoading(false); // ✅ Add this
    })
    .catch(() => {
      toast.error("Could not fetch apology");
      setLoading(false); // ✅ Even on error, stop loading
    });
}, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-600 text-xl">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 text-xl font-semibold">
        Invalid or expired link.
      </div>
    );
  }

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-xl w-full text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-red-600 mb-4">💌 I'm Sorry</h1>
        <p className="text-lg md:text-xl font-medium text-gray-800 whitespace-pre-wrap">
          {data.message}
        </p>
        <button
          onClick={handleCopy}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300"
        >
          📎 Copy Share Link
        </button>
      </div>
    </div>
  );
};

export default TemplatePage;
