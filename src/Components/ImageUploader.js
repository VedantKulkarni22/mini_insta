import React, { useState } from 'react';

const ImageUploader = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [imageName, setImageName] = useState('');

  const readURL = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
        setImageName(input.files[0].name);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  const removeUpload = () => {
    setImageSrc('');
    setImageName('');
  };

  const handleFileChange = (e) => {
    readURL(e.target);
  };

  return (
    <>
      <div className="file-upload d-flex flex-column">
        <div className="image-upload-wrap mx-auto my-4">
          <input className="file-upload-input form-control" type="file" onChange={handleFileChange} accept="image/*" />
        </div>

        {imageSrc && (
          <>
            <div className="file-upload-content mx-auto my-4">
              <img className="file-upload-image img-fluid" src={imageSrc} height="496px" width="436px" alt="uploaded file" />
            </div>
            <div className="image-title-wrap mx-auto my-4">
              <button type="button" onClick={removeUpload} className="remove-image btn btn-outline-dark">Remove <span className="image-title">{imageName}</span></button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ImageUploader;
