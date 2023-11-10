const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use("/public", express.static(publicPath));

app.listen(7000, () => {console.log("Servidor Corriendo");});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});