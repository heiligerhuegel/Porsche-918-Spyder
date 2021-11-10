const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  //console.log(res);
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/works", (req, res) => {
  //console.log(res);
  res.sendFile(__dirname + "/public/views/works.html");
});

app.get("/about", (req, res) => {
  //console.log(res);
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/gallery", (req, res) => {
  //console.log(res);
  res.sendFile(__dirname + "/public/views/gallery.html");
});

app.use((req, res) => {
  res.sendFile(__dirname + "/public/views/404.html");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
