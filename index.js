const express=require('express')
const { type } = require('os')
const path=require('path')
const app=express()
// const middleware=(req,res,next)=>{
//     console.log("hii this is middle ware");
//     next()
// }
// app.use(middleware)
// app.get("/",middleware,(req,res)=>{
//     res.send("Hii this is Get request")
// })
// app.post("/",(req,res)=>{
//     res.send("HI this is the Post Request")
// })
// app.put("/",(req,res)=>{
//     res.send("Hii this is put request")
// })
// app.delete("/",(req,res)=>{
//     res.send("HI this is the Delete Request")
// })
const members=[{
    id:1,
    name:'SHIVAM',
    email:'shivam@gmail',
    status:'active'
},{
    id:2,
    name:'Mayank',
    email:'Mayank@gmail',
    status:'inactive' 
},{
    id:3,
    name:'Dubey',
    email:'dubey@gmail',
    status:'active' 
}
]
app.get("/showalluser",(req,res)=>{
    res.status(200).json(members)
})
app.get("/showuser/:id",(req,res)=>{
  const id=req.params.id  
  const user=members.filter(member =>member.id===parseInt(id))
     user.length!=0? res.status(200).json(user):res.status(200).json({msg:"user not found"})
 
})
const PORT=3000


app.listen(PORT,()=>console.log(`server  is running at ${PORT}`))