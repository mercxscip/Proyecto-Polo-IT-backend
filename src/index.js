const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const { router } = require("./routers")
require("./database/config")


const app = express()
// Middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(router)

// Server
app.listen(3000, ()=> console.log("El servidor está escuchando"))