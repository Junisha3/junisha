const express=require('express');
const app=express();
const members=[
    {
        stdId:1,
        stdName:'Junisha',
        stdMarks:50,
        
    },
    {
        stdId:2,
        stdName:'Harisha',
        stdMarks:50,
        
    },
    {
        stdId:3,
        stdName:'Divya',
        stdMarks:60,
    },
    
];
//get all members
app.get('/api/members',(req,res)=>{
    res.json(members);
});
const port = process.env.port || 5000;

app.listen(port, ()=>console.log(`server started`));