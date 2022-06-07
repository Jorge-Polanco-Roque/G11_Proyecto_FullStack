const path = require("path");
const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRoutes");

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRouter);


app.listen(PORT, () => console.log("Servidor corriendo en el puerto: " + PORT));