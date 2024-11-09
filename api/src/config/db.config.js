require("dotenv").config()
const mongoose = require("mongoose");

const initDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: process.env.MONGODB_NAME,
      autoCreate: true,
      autoIndex: true,
    });
    console.log("Db connected successfully");
  } catch (exception) {
    console.log("Error connecting db", exception);
  }
};

initDb();
