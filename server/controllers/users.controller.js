const usersCtrl={};

const UserModel=require('../models/User')

//###pedir usuarios
usersCtrl.getUsers=async (req,res)=>{
    const usuarios=await UserModel.find();
    res.json(usuarios)
}

//### crear usuarios
usersCtrl.createUser=async (req,res)=>{
    const {nombre}=req.body;
    console.log(nombre)
    const n= new UserModel({nombre:nombre})
    await n.save();
    res.json({mensaje:"usuario creado"})
}


//###eliminar usuarios
usersCtrl.deleteUser=async (req,res)=>{
    await UserModel.findByIdAndDelete(req.params.id)
    res.json({mensaje:"usuario Eliminado"})
}

module.exports=usersCtrl;
