

const express = require("express")
const app = express()
const mongoose =require ("mongoose")
const dotenv = require ("dotenv")
dotenv.config()



app.use(express.json())
app.use("/api",require("./router/productRout"))

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DataBase Connected"))

















const PORT = process.env.PORT

app.listen(PORT, ()=> console.log("Server is Activated on 5018") )

