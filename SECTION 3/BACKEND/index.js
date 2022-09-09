//importing express module
const express = require('express');
const userRouter =  require('./Routers/userRouter');
const videoRouter =  require('./Routers/videoRouter');
const productRouter = require('./Routers/productRouter');
const cors = require('cors');

//initializing express app
const app = express();
const port  = 5000;

//for converting  json data to javascript
app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}))

//importing routes middlewere
app.use('/user', userRouter);
app.use('/video',videoRouter);
app.use('/product',productRouter);

//route or end point 
app.get( '/', (req,res)  => {
    res.send('response from express');
})

app.get( '/home', (req,res)  => {
    res.send('response from home ');
})

//starting  the server
app.listen( port,() =>{
    console.log('Express server started...');
} );
