//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/bmi",function(req,res){
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);
  var bmi=(weight)/(height*height);
  if(bmi<18.5)
  {res.send("<h1>UnderWeight</h1>Your bmi: "+bmi);}
  else if (bmi>25) {
    res.send("<h1>OverWeight</h1>Your bmi: "+bmi);
  }
  else {
    res.send("<h1>Normal Weight</h1>Your bmi: "+bmi);
  }
});
app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
