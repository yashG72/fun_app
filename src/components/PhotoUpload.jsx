import React, { useRef } from "react";

const PhotoUpload = ({ setBackgroundImage }) => {
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setBackgroundImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="text-center my-6">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <button
        onClick={() => fileInputRef.current.click()}
        className="px-6 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
      >
        Upload Your Image
      </button>
    </div>
  );
};

export default PhotoUpload;
