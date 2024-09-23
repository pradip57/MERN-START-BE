const fs = require("fs");
const cloudinary = require("cloudinary").v2;

//generate random string
const generateRandomString = (length = 100) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const len = chars.length;
  let random = "";

  for (let i = 0; i < length; i++) {
    const posn = Math.floor(Math.random() * len - 1);
    random = random + chars[posn];
  }
  return random;
};
//generate random number
const randomNumber = Math.ceil(Math.random() * 999);

//cloudFileUpload

const cloudFileUpload = async (file, folder = "ecommerce") => {
  try {
    const uploadCloudinary = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto",
      folder: folder,
    });
    removeFile(file.path);
    console.log(uploadCloudinary);
    return uploadCloudinary.secure_url;
  } catch (exception) {
    removeFile(file.path);

    throw exception;
  }
};

//deletefile
const removeFile = (path) => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
};

module.exports = {
  generateRandomString,
  randomNumber,
  removeFile,
  cloudFileUpload,
};
