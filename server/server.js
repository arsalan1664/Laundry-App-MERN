require('dotenv/config');
const morgan = require('morgan');
const express = require('express');
const Router = require('./routes/authRoute');
const app = express();
const port = process.env.PORT 
const cors = require('cors')


// middlewares
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())


// api
app.use('/auth', Router)


// api
app.get('/',(req,res)=>{
    return res.send('<h1>hello world</h1>');
})

// listen
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})