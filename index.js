const express=require('express')
const { type } = require('os')
const path=require('path')
const app=express()
const uuid=require('uuid')
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
app.use(express.json())
app.get("/showalluser",(req,res)=>{
    res.status(200).json(members)
})
app.get("/showuser/:id",(req,res)=>{
  const id=req.params.id  
  const user=members.filter(member =>member.id===parseInt(id))
     user.length!=0? res.status(200).json(user):res.status(200).json({msg:"user not found"})
 
})
// saving data
app.post('/adduser',(req,res)=>{
    // const name=req.body.name
    // const email=req.body.email
    // const status=req.body.status
  const{name,email,status}={...req.body}
    // const{name,email,status}=req.body
   members.push({id:uuid.v4(),name,email,status})
   res.status(200).json(members)



})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>console.log(`server  is running at ${PORT}`)) 