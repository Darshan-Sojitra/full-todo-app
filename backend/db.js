const mongoose = require('mongoose');
const { boolean } = require('zod');



mongoose.connect("mongodb+srv://darshan:darshan123@cluster0.gttsu44.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo =mongoose.model('todo',todoSchema);

module.exports={
    todo
}