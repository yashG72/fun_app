import React, { useState } from "react";

const BackgroundUploader = ({ children }) => {
  const [bgImage, setBgImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBgImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* File input */}
      <div className="absolute top-4 left-4 z-10">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="bg-white px-4 py-2 rounded shadow cursor-pointer"
        />
      </div>

      {/* Background Image */}
      {bgImage && (
        <div
          className="background-preview"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Child content (like apology message) */}
      <div className="relative z-10 flex justify-center items-center min-h-screen text-white">
        {children}
      </div>
    </div>
  );
};

export default BackgroundUploader;
