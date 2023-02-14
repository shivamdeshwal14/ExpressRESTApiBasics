const express=require('express')
const {type} = require('os')
const path=require('path')
const app=express()
const uuid=require('uuid')
const members=require('./members')
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
app.delete('/deleteuser/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const found=members.some(member=>member.id===id)
    if(found)
    {
          const result=members.filter(member=>member.id!==id)
          res.status(200).json(result) 
    }
    else{
       res.status(400).json({msg:`No member found with id ${id}`} ) 
    }
    
    
})
// update user
app.put('/updateUser/:id',(req,res)=>{
    console.log("HELLO");
   const found=members.some(member=>member.id===parseInt(req.params.id))
//     // user found
    if(found)
    {
        const updmember=req.body
        members.forEach(member=>{
            if(member.id===parseInt(req.params.id))
            {
                member.name=updmember.name
                member.email=updmember.email
               
                
            }
        })


    }
    
    // not found
    else{
        res.status(400).json({msg:`No member found with id ${req.params.id}`})
    
    }
    res.status(200).json(members)
    

})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>console.log(`server  is running at ${PORT}`)) 