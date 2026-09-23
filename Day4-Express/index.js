import express from 'express'

const app = express();
const port = 3000;

app.set("viewengine","ejs")

app.get("/",(req,res)=>{
    res.render("index.ejs",{username:"Abbas"})
})

app.get("/ig/:username",(req,res)=>{
    const {username} = req.params;
    res.render("ig.ejs",{user:username})
})


app.get("/loop",(req,res)=>{
    const fruits = ["Apple","Mango","Peach"]
    res.render("fruits.ejs",{fruits})
})



app.listen(port,()=>{
    console.log(`Listening on the port ${port}`);
})