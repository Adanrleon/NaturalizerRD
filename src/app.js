const express = require('express')
const app = express ();
const path = require('path')
const port = process.env.PORT || 3000;

app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname,"../public")))

app.get('/', (req, res)=>{
    res.render('./pages/home');
})

app.get('/contacts', (req, res)=>{
    res.render('./pages/contacts');
})

app.get('/nosotros', (req, res)=>{
    res.render('./pages/nosotros');
})

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})