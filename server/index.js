require('dotenv').config();//antes de que incie la aplicacion importa las variables de .env

const app=require('./app')
require('./database')

const main=async()=>{
    await app.listen(app.get('port'));
    console.log('server en port',app.get('port'));
}

main();
