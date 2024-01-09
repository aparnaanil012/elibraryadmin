const express = require('express');
const router = express.Router();
const app=express();
const cors = require('cors');



const studmodel=require('./db')
const usersRouter=require('./routes/usersRouter')
const bookRouter=require('./routes/bookRouter')

app.use(cors());
app.use(express.json())
app.use('/api/books',bookRouter)
app.use('/api/users', usersRouter)

app.listen(3005,()=>

    console.log("connected")
)