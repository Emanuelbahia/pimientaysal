const express = require("express");
const app = express();
const path = require("path");
const mainRutas = require("./routes/main");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRutas);

app.listen(3000 || process.env.PORT, function () {
  console.log("funciona");
});
