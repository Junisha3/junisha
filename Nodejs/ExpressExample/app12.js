const express = require('express');
const app = express();

const members=[
    {
        id:1,
        name:'junisha',
        email:'divijunisha21@gmail.com',
        status:'active'
    },
    {
        id:2,
        name:'Anitha',
        email:'anitha21@gmail.com',
        status:'inactive'
    },
    {
        id:3,
        name:'Bhavani',
        email:'bhavani@gmail.com',
        status:'active'
    },
];

    app.get('/api/members' ,(req,res)=>{
        res.json(members);
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, ()=>console.log('server started....'));

