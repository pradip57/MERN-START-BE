const express = require("express");

const mainRouter = express.Router();

mainRouter.get("/health", (req, res) => {
  res.send("This is health");
});

mainRouter.get("/done/:slug",(req,res)=>{
    
    const slug = req.params.slug
    res.send(slug)
    console.log(slug)
})

mainRouter.use("/", (req, res) => {
  res.send("This is main page");
});

module.exports = mainRouter;
