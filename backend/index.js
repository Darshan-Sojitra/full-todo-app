const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app =express();
const port =3000;
import(createTodo)
import(updateTodo)

app.use(express.json())
app.post('/todo',(req,res)=>{
   const payLoad = req.body;
   const parsedpayLoad =createTodo.safeParse(payLoad);
   if(!parsedpayLoad.success){
    res.status(411).json({
        messge:"Invalid input"
    });
    return;
   }
   //mongodb  
})

app.get('/todos',(req,res)=>{
    
})

app.put('/completed',(req,res)=>{
    const payLoad = req.body;
    const parsedpayLoad =updateTodo.safeParse(payLoad);
    if(!parsedpayLoad.success){
     res.status(411).json({
         messge:"Invalid input"
     });
     return;
    }
})

app.listen(port,()=>{
    console.log(`lostining to port ${port}`);
})