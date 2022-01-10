const express=require('express');
const app=express();
app.use('/productdetails',require('./router/index'));

const port=process.env.port||4343;
app.listen(port,()=>console.log('server started....'));