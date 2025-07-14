import mongoose from "mongoose";

//create scheme
// create model

const noteSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    }, 
    content:{
        type:String,
        required:true
    },
    
}, {timestamps: true})

const Note = mongoose.model("Note", noteSchema)

export default Note  