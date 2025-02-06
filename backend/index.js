const express = require("express");
const {todoSchema , todoUpdatedSchema} = require("./types.js");
const {todoInteractor} = require("./db.js");
const app = express();
const port = 3000;


app.use(express.json());


app.get("/todos" , async (req,res)=>{

    // a code to print all the todos
    const todos = await todoInteractor.find({});

    console.log(todos)

    res.json(
        todos
    )
    

})


app.post("/todo" , async (req,res)=>{
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
    await todoInteractor.create({
        title : loadData.title,
        description : loadData.description,
        completed:  false
    })

    res.status(200).json({
        msg : "Object Pushed in DataBase"
    })

})


app.put("/completed" , async (req,res)=>{

    // a code that marks wether complete or not

    const loadData = req.body;

    const parseLoadData = todoUpdatedSchema.safeParse({
        id : loadData.id
    })

    if(!parseLoadData.success){
        res.status(411).json({
            msg : "Invalid Data input in completed route."
        })
        return;
    }

    // logic for marking stuff as complete in database
    await todoInteractor.findOneAndUpdate({_id : loadData.id} , {completed : true});

    res.json({
        msg : "completed marked as true."
    })

})


app.listen(port , ()=>{
    console.log(`listening on port  :${port}`);
})