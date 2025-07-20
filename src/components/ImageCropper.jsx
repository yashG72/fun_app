import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import Slider from "@mui/material/Slider";
import { getCroppedImg } from "../utils/cropImage";
import { Dialog } from "@mui/material";

const ImageCropper = ({ image, onCropDone, onCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleDone = async () => {
    const croppedImage = await getCroppedImg(image, croppedAreaPixels);
    onCropDone(croppedImage);
  };

  return (
    <Dialog open={true} fullScreen>
      <div className="relative w-full h-screen bg-black">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={16 / 9}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />

        <div className="absolute bottom-10 w-full px-6">
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(e, zoom) => setZoom(zoom)}
          />

          <div className="flex justify-center gap-6 mt-4">
            <button
              onClick={onCancel}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleDone}
              className="px-6 py-2 bg-red-600 text-white rounded-lg"
            >
              Set Image
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ImageCropper;
