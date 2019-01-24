const express = require ('express'); //server
const bodyParser = require('body-parser'); //convert json to obj (js)

const massive = require('massive'); //connection to database
require('dotenv').config();
const ctrl = require('./products_controller')

const app = express();                 // remember this 
app.use(bodyParser.json());            // remember this

massive(process.env.CONNECTION_STRING).then((db)=>{
    app.set('db',db)
})
.catch((err)=>{
    console.log(err)
})

app.get(`/api/products`,ctrl.getAll);
app.get(`/api/products/:id`,ctrl.getOne);
app.put(`/api/products/:id`,ctrl.update);
app.post(`/api/products`,ctrl.create);
app.delete(`/api/products/:id`,ctrl.delete);


const PORT = process.env.PORT;
app.listen(PORT,()=>console.log(`Server Listening on ${PORT}`));

