import cloudinary from "../config/cloudinary.config.js";

export const uploadMultipleImages = async (Images, storageLocation) => {
  try {
    const multiple = Images.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      const dataURI = `data:${image.mimetype};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: storageLocation,
        height: 500,
        width: 500,
        crop: "fill",
      });

      console.log(result);
      return {
        url: result.secure_url,
        public_id: result.public_id,
      };
    });
    return await promise.all(multiple);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const deleteMultipleImages = async (Images) => {
  try {
    const deleteImages = Images.map(async (image) => {
      await cloudinary.uploader.destroy(image.publicId);
    });
    return await Promise.all(deleteImages);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const deleteSingle = async (Image, storageLocation) => {
  try {
    await cloudinary.uploader.destroy(Image.publicId);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const singleImage = async (Image, storageLocation) => {
  try {
    const b64 = Buffer.from(Image.buffer).toString("base64");
    const dataURI = `data:${Image.mimetype};base64,${b64}`;
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: storageLocation,
      width: 500,
      height: 500,
      crop: "fill",
    });
    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
