const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
require("./db/conn");
const {json}=require("express");
const User=require("./models/users");

const port=process.env.PORT||3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set("views",template_path);
// hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/start_test",(req,res)=>{
    res.render("start_test");
})

app.post("index",async(req,res)=>{
    try{ 
      const data=new User({
       name:req.body.name,
       password:req.body.pass,
       email:req.body.email
      })
      const s=await data.save();
      res.status(201).render(index);
    }
    catch(err){
          res.status(400).send(error);
    }
})

app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
})