const express=require("express")
const app=express()

const path=require('path')

//settings
app.set('port',process.env.PORT || 4000);


//middlewares
app.use(express.json());

//routes
app.use('/api/users',require('./routes/users'))
app.use('/api/notes',require('./routes/notes'))

//archivos estaticos
app.use(express.static(path.join(__dirname,'..','build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname,'..','build','index.html'));
  });

module.exports=app