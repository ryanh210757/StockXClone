const mongoose=require("mongoose")
const express=require("express")
const cors = require("cors")
const app = express()
const PostMessage = require('../server/models/post.js')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



mongoose.connect("mongodb+srv://StockX:9bIj0TXYXkEOnVSK@cluster0.32pcvbn.mongodb.net/")
.then(() => {
    app.listen(4000, () => console.log("database listening at port 4000"))
})
.catch((error) => console.log(error.message)) 

app.post("/login", async(req,res) => {
    const {email,password}=req.body
    try {
        const check = await PostMessage.findOne({email: email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }
    } catch (error) {
        res.json(error)
    }
})

app.post("/signup", async(req,res) => {
    const {email,password}=req.body

    const data ={
        email: email,
        password: password
    }
    try {
        const check = await PostMessage.findOne({email: email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
            await PostMessage.insertMany([data])
        }
    } catch (error) {
        res.json(error)
    }
})