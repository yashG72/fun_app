import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import toast from "react-hot-toast";

const HomePage = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const id = uuidv4();
    const apologyMessage = message.trim() || getRandomApology();

    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/apology`, {
        id,
        image,
        message: apologyMessage,
      });

      navigate(`/template/${id}`);
    } catch (error) {
      toast.error("Failed to save apology 😢");
      console.error(error);
    }
  };

  const getRandomApology = () => {
    const messages = [
        "Tujhse door rehkar dil roya hai, maine toh sirf tujhko hi chaha hai 🥺",
        "Galti ho gayi, par pyaar toh sacha hai, tu hi meri duniya, tu hi meri racha hai 💘",
        "Tere bina main adhoora hoon, tu na ho toh sab kuch bekaara hoon 😭",
        "Maafi de de mujhe meri jaan, nahi chalegi ab tere bina meri shaan 💔",
        "Tera gussa bhi pyara hai, par tera pyaar sabse nyara hai 🥰",
        "Tujhse doori bardasht nahi hoti, meri har khushi tujhse hi hoti 💌",
        "Mujhse jo bhi ho gaya, dil se sorry bol gaya 😓",
        "Tera chehra na dikhe toh din nahi chadhta, tu hansi de de bas, dil yahi chahta 🌞",
        "Maana maine kiya hai bawaal, par tu hi hai meri jaan ka haal 😵‍💫",
        "Tera gussa ice cream se bhi thanda ho jaye, bas ek baar ‘okay’ keh de, dil behal jaye 🍦",
        ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-6">
      <div className="bg-white shadow-xl p-8 rounded-xl max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">💌 Send a Funny Apology</h1>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-100 file:text-red-700 hover:file:bg-red-200 mb-4"
        />

        <textarea
          placeholder="Write your apology here or leave it blank for a funny one!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-32 border border-red-200 rounded-lg p-4 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-red-300"
        />

        <button
          onClick={handleSubmit}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition"
          disabled={!image}
        >
          ❤️ Generate a Template
        </button>
      </div>
    </div>
  );
};

export default HomePage;
