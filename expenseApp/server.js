var express=require('express');
var bodyParser=require('body-Parser');
var app=express();
app.use(express.static('app'));
var port=1111;
app.listen(port,function(){
  console.log('listen port no:',port);
})
