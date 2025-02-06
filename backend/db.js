const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:mhXcgRoRq36NTWo5@cluster0.0jcbl.mongodb.net/SelfTodoDataBase");

const todoSchemas = mongoose.Schema({
    title : String , 
    description : String , 
    completed : Boolean
})

const todoInteractor = mongoose.model("TodoDetails" , todoSchemas);

module.exports = {
    todoInteractor
}