const{Schema,model}=require('mongoose')

const noteSchema =new Schema(
    {
    titulo:String,
    contenido:{type:String,required:true},
    autor:String,
    date:{
        type:Date,
        default:Date.now
    }
    },
    {
    timestamps:true
    }
)

module.exports= model('Note',noteSchema)