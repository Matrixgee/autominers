import React, { useState } from "react";
import "./image-preview.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ImagePreview = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImageSrc(reader.result);
      setFileSelected(true); // Set fileSelected to true when an image is selected
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-container">
      {!fileSelected ? (
        <label htmlFor="file" className="camera-icon-label">
          <CameraAltIcon />
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </label>
      ) : null}
      {imageSrc && (
        <img id="preview" src={imageSrc} alt="Preview" className="image" />
      )}
    </div>
  );
};

export default ImagePreview;
