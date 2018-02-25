const express = require("express");

const app = express();
const PORT = 8080;

app.get("/hello", (req,res)=> {
  res.status(200).json({hello: "working"});
});

app.listen(8080, () => {
  console.log("Listening on port:8080");
});
