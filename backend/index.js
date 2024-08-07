const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app =express();
const port =3000;
const cors = require('cors');


app.use(cors());
app.use(express.json())

app.post('/todo',async (req,res)=>{
   const payLoad = req.body;
   const parsedpayLoad =createTodo.safeParse(payLoad);
   if(!parsedpayLoad.success){
    res.status(411).json({
        messge:"Invalid input"
    });
    return;
   }
   await todo.create({
        title: payLoad.title,
        description: payLoad.description,
        completed:false
   })

   console.log("Todo Created");

   res.json({
    messge:"Todo created"
   } )
   //mongodb  
})

app.get('/todos',async(req,res)=>{
    const todos =await todo.find({});
    res.json({todos});
})

app.put('/completed',async (req,res)=>{
    const payLoad = req.body;
    const parsedpayLoad =updateTodo.safeParse(payLoad);
    if(!parsedpayLoad.success){
     res.status(411).json({
         messge:"Invalid input"
     });
     return;
    }
    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Mark as completed"
    })
})

app.listen(port,()=>{
    console.log(`lostining to port ${port}`);
})