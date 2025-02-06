const mongoose = require("mongoose");

mongoose.connect(""); // enter the mongodb connection url to run

const todoSchemas = mongoose.Schema({
    title : String , 
    description : String , 
    completed : Boolean
})

const todoInteractor = mongoose.model("TodoDetails" , todoSchemas);

module.exports = {
    todoInteractor
}