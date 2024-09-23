const fs = require("fs");
const multer = require("multer");
const {
  generateRandomString,
  randomNumber,
} = require("../utilities/helper");

const setPath = (path) => {
  return (req, res, next) => {
    req.uploadDir = path;
    next();
  };
};

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = "./public/uploads/images/" + req.uploadDir;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },

  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    const fileName = Date.now() + "-" + generateRandomString(5) + "." + ext;
    cb(null, fileName);
  },
});

const uploader = multer({
  storage: myStorage,
});

module.exports = { uploader, setPath };
