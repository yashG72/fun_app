import React, { useState } from "react";

const apologies = [
  "I'm sorry I ate your fries... but they looked lonely 🍟😅",
  "I’m sorry for what I said when I was hungry. Let’s get pizza? 🍕❤️",
  "Sorry for stealing the blanket... again. Love ya 🛏️😬",
  "I apologize for my face when I lose at Ludo 🙃🎲",
  "I didn’t mean to forget our anniversary. My brain lagged 😩🧠",
  "Sorry babe... I didn’t choose the lazy life, the lazy life chose me 🐢💤",
  "Forgive me or I’ll send 100 dog pics 🐶📸",
];

const ApologyMessageBox = () => {
  const [message, setMessage] = useState(apologies[0]);

  const generateApology = () => {
    const random = Math.floor(Math.random() * apologies.length);
    setMessage(apologies[random]);
  };

  return (
    <div className="text-center bg-black/60 text-white px-6 py-4 rounded-xl max-w-lg mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">I'm Really Sorry Babe 😔</h1>
      <p className="text-lg md:text-xl mb-4">{message}</p>
      <button
        onClick={generateApology}
        className="bg-primary hover:bg-primary-dull transition px-5 py-2 rounded-full font-medium"
      >
        Generate New Apology
      </button>
    </div>
  );
};

export default ApologyMessageBox;
