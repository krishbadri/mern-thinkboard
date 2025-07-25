import Note from "../models/Note.js"
export async function getAllNotes(_, res){
    try{
        const notes = await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)
    } catch (error){
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({message:"internal server error"})
    }
}

export async function getNoteById(req, res){
    try {
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({message:"We could not find that note"})
        res.json(note)
    } catch (error) {
        console.error("Error in getNoteById controller", error)
        res.status(500).json({message:"internal server error"})
    }
}

export async function createNote(req, res){
    try{
        const {title, content} = req.body
        const note = new Note({title, content})
        const savedNote = await note.save()
        res.status(201).json(savedNote)
    } catch(error){
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({message:"internal server error"})
    }
}

export async function updateNote(req, res){
    try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new:true})
        if (!updatedNote) return res.status(404).json({message:"note not found"})
        res.status(200).json(updatedNote)        
    } catch (error) {
        console.error("Error in updateNotes", error)
        res.status(500).json({message:"internal server error"})
    }
}

export async function deleteNote(req, res){
    try {
        // const {title, content} = req.body
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) return res.status(404).json({message:"Could not find note"})
        res.status(200).json({message:"node deleted successfully", deletedNote})
        // res.status(200).json({deletedNote})
    } catch (error) {
        console.log("Error in deleteNote", error)
        res.status(500).json({message:"internal server error"})
    }
}

