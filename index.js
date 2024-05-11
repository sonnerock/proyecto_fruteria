// importar librerias
const express = require("express")
const exphbs = require("express-handlebars")

// crear instancia de express
const app = express()

// escuchar conexiones http en puerto 3000
app.listen(3000, ()=>{
    console.log("app escuchando puerto 3000")
})

//Definir el motor de vistas
app.set("view engine", "handlebars")

//configurar motor de vistas
app.engine(
    "handlebars",
    exphbs.engine()
)
//Middleware para dejar una ruta foja o estatica para que apunte a bootstrap

//ruta para bootstrap
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"))
//ruta para popper y crear interactividad en la app
app.use("/popper", express.static(__dirname + "/node_modules/@popperjs/core/dist/umd"))
//ruta publica para carpeta assets
app.use("/assets", express.static(__dirname + "/assets"))

//Definicion de rutas
app.get ("/", (req, res) => {
    res.render(
        "home",
        {
            listaProductos:["banana", "cebollas", "pimenton", "papas", "lechuga", "tomate"]
        })
})

// app.get("/usuarios", (req, res)=>{
//     res.render("usuarios")
// })


