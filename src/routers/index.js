const express = require("express")
const { handlerController } = require("../controllers/index")

// Routers
const router = express.Router()
router.get("/", handlerController)

module.exports = {router}