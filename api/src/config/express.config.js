const express = require("express");

require("./db.config")

const mainRouter = require("./router.config");
const { MulterError } = require("multer");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/imageson", express.static("./public/uploads"));

app.use("/api/v1", mainRouter);

app.use((req, res, next) => {
  next({
    data: "Ok",
    status_code: 404,
    message: "Resource not found,Sorry",
    status: "NOT_FOUND",
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  let data = err.data || null;
  let message = err.message || "Internal Error .......";
  let status = err.status || "INTERNAL_SERVER_ERROR";
  let status_code = err.status_code || 500;

  if (err instanceof MulterError) {
    status_code = 400;
    message = "Validation Failed";
    //detect error and send in data field
  }

  res.status(status_code).json({
    result: data,
    message: message,
    meta: null,
    status: status,
  });
});

module.exports = app;
