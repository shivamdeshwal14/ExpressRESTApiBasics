const express=require('express')
const path=require('path')
const app=express()
const middleware=(req,res,next)=>{
    console.log("hii this is middle ware");
    next()
}
app.use(middleware)
app.get("/",middleware,(req,res)=>{
    res.send("Hii this is Get request")
})
app.post("/",(req,res)=>{
    res.send("HI this is the Post Request")
})
app.put("/",(req,res)=>{
    res.send("Hii this is put request")
})
app.delete("/",(req,res)=>{
    res.send("HI this is the Delete Request")
})

const PORT=3000


app.listen(PORT,()=>console.log(`server  is running at ${PORT}`))