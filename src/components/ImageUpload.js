// src/components/ImageUpload.js
import React, { useState } from 'react';

const ImageUpload = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div>
            <h2>Upload an Image</h2>
            <input type="file" onChange={handleImageChange} />
            {image && <img src={image} alt="Uploaded" style={{ width: '200px', marginTop: '20px' }} />}
        </div>
    );
};

export default ImageUpload;