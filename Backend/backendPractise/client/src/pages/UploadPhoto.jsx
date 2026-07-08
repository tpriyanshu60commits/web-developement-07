import React, { useState } from "react";
import api from "../config/ApiConfig";

const UploadPhoto = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];

    console.log("Selected File:", file);

    if (file) {
      setImage(file);

      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select image first");
      return;
    }

    const formData = new FormData();
    formData.append("displayPic", image);

    formData.append("email", "priyanshu@gmail.com");
    formData.append("fullName", "Priyanshu Tiwari");
    formData.append("phone", "9876543210");

    try {
      setLoading(true);

      const response = await api.put("/user/edit-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Backend Response:", response.data);

      alert("Photo Uploaded Successfully");
    } catch (error) {
      console.log("Upload Error:", error.response?.data || error.message);

      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-5">Upload Profile Photo</h1>

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-40 h-40 rounded-full object-cover mb-5"
          />
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="mb-5"
          />

          <br />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPhoto;
