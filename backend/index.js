const express = require("express");
const app = express();
const port = 3000;


app.use(express.json());


app.get("/todos" , (req,res)=>{

    // a code to print all the todos

})


app.post("/todo" , (req,res)=>{

    // a code to a single todo to the database

})


app.put("/completed" , (req,res)=>{

    // a code that marks wether complete or not

})