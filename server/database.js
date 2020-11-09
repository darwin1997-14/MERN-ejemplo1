const mongoose=require('mongoose');

const URI=process.env.MONGODB_URI
        ?process.env.MONGODB_URI
        :'mongodb://localhost/test';

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const conexion=mongoose.connection;
conexion.once('open',()=>{
    console.log('db esta conectado')
});
