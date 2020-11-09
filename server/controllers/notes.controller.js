const notesCtrl={};


const NoteModel=require('../models/Note')

//###pedir notas
notesCtrl.getNotes=async (req,res)=>{
    const notas=await NoteModel.find(); //[{},{},{},...]
    res.json(notas)
}

//###crear notas
notesCtrl.createNote=async (req,res)=>{
    const {titulo,contenido,date,autor}=req.body
    const newNote=new NoteModel({
        titulo:titulo,
        contenido:contenido,
        date:date,
        autor:autor
    })
    await newNote.save();
    res.json({mensaje:"nota Guardada"})
}

//### pedir una sola nota
notesCtrl.getNote=async (req,res)=>{
    const note=await NoteModel.findById(req.params.id)
    res.json(note)
    }

    

//### actualizar nota
notesCtrl.updateNote=async (req,res)=>{
    await NoteModel.findByIdAndUpdate(req.params.id,req.body)
    res.json({mensaje:"Nota Actualizada"})
    }



//### eliminar nota
notesCtrl.deleteNote=async (req,res)=>{
    await NoteModel.findByIdAndDelete(req.params.id)
    res.json({mensaje:"Nota Eliminada"})
    }


module.exports=notesCtrl;