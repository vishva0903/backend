const express=require('express');
const res = require('express/lib/response');
const app=express();
const port=8000;
app.listen(port,()=>{
    console.log(`server is listening in port:${port}`)
})
app.get('/',(req,res)=>{
    res.send("hello World")
});
app.get('/aboutus',(req,res)=>{
    res.send("this information from About us")
});
