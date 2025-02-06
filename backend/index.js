const express = require("express");
const {todoSchema , todoUpdatedSchema} = require("./types.js")
const app = express();
const port = 3000;


app.use(express.json());


app.get("/todos" , (req,res)=>{

    // a code to print all the todos

})


app.post("/todo" , (req,res)=>{
    // a code to a single todo to the database

    const loadData = req.body;

    const parseLoadData = todoSchema.safeParse({
        title : loadData.title , 
        description  : loadData.description , 
        completed : false
    })

    if(!parseLoadData.success){
        res.status(411).json({
            msg : "Invalid Inputs"
        })
        return;
    }

    // write some logic for like mongodb management



})


app.put("/completed" , (req,res)=>{

    // a code that marks wether complete or not

    const loadData = req.body;

    const parseLoadData = todoUpdatedSchema.safeParse({
        id : loadData._id
    })

    if(!parseLoadData.success){
        res.status(411).json({
            msg : "Invalid Data input in completed route."
        })
        return;
    }

    // logic for marking stuff as complete in database

})