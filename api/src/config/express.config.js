const express = require("express");
const mainRouter = require("./router.config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/imageson', express.static("./public/uploads"))

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
  res.status(status_code).json({
    result: data,
    message: message,
    meta: null,
    status: status,
  });
});

module.exports = app;
