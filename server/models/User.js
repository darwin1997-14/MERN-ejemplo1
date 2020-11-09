const{Schema,model}=require('mongoose')

const userSchema =new Schema(
    {
    nombre:{type:String,
            required:true,
            trim:true,
            unique:true}
    },
    {
        timestamps:true
    }
   
)
module.exports= model('User',userSchema)
