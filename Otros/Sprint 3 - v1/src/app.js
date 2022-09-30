const express = require("express");
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, 'public');
const mainRoutes = require("./routes/mainRoutes");

const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", mainRoutes);

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto 3000')
});
