const authRouter = require("express").Router();

//registration
authRouter.post("/register", (req, res) => {});

//activation
authRouter.get("/activate/:token", (req, res) => {});

//login
authRouter.post("/login", (req, res) => {});

//logout
authRouter.delete("/logout", (req, res) => {});

//forget password
authRouter.post("/forget-password", (req, res) => {});

//reset password
authRouter.patch("/reset-password/:token", (req, res) => {});

module.exports = authRouter;
