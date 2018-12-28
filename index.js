const express =require('express');
const app=express();

app.get('/',function(req,res,next){
    res.send('hello word')
})

const server=app.listen(3000,function(){
    console.log(`listening http://localhost:${server.address().port}`)
})