const express = require("express")
const app = express()

const PORT = 3002


app.get("/",(req,res)=>{
    res.send("hi  hello")
})

app.listen(PORT,()=>{
    console.log(`connect establish ${PORT}`)
})