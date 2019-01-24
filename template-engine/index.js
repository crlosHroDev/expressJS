const express=require('express');
const expressJsx=require('./express-jsx');

const app=express()

app.engine('jsx',expressJsx)
app.set('views','./template-engine/views')
app.set('view engine','jsx')

app.get('/',function(req,res){
    res.render('index',{hello:'hola',world:'mundo'})
})

const server=app.listen(8000,function(){
    console.log(`Listening http://localhost:${server.address().port}`)
})