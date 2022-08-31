const express = require("express");
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '../public');
const methodOverride =  require('method-override');
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')) ;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const mainRouter = require('./routes/mainRoutes');
const productsRouter = require('./routes/productsRoutes');
const usersRouter = require('./routes/usersRoutes');


app.use("/", mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);



app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto 3000')
});
