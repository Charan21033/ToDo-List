const express = require("express")
const mongoose =  require("mongoose")
require("dotenv").config()

const routes =require("./routes/ToDoRoutes")

const cors =require("cors")

const app = express()
const PORT = process.env.Port|| 5000

//middleware
app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected..."))
.catch((err)=> console.log(err));

app.use("/api",routes);




app.get("/",(req,res)=>{
    res.send("Hi...");
})


app.listen(PORT, ()=> console.log(`Listening at ${PORT}....`));