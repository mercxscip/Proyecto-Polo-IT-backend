const mongoose = require("mongoose")

const USERNAME = "mercxscip"
const PASSWORD = "proyectopoloIT"
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.yqsouhy.mongodb.net/partnersDB`


async function main() {
    try {
        const connection = await mongoose.connect(URL);
        console.log('Conexión exitosa')
    }
    catch(error) {
        console.log(error)
    }
    }

main()