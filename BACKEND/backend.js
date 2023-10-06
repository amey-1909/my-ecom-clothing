const Express=require("express");
const bodyParser = require("body-parser");
const mongoose= require("mongoose");
require('dotenv').config();
const http=require("http");
mongoose.connect(process.env.REACT_APP_MONGODB_SERVER);
const cors=require("cors");
const PORT = process.env.PORT||5000;
const app=Express();
app.use(cors());
app.use(Express.json())
app.use(bodyParser.urlencoded({extended:true}));
const server=http.createServer(app);
server.listen(PORT);
const catagoriesSchema=new mongoose.Schema({
    title:String,
    items:[{
        id: Number,
        name: String,
        imageUrl: String,
        price: Number
    }]
})
const Catagories=mongoose.model("catagorie",catagoriesSchema);
app.get("/catagoriesItem",async(req,res)=>{
    Catagories.find().then(catagories=>{
        res.send(catagories);
    })
})






































































// app.get("/signIn",(req,res)=>{
//     res.send("hi");
// })
// app.post("/signIn",function (req,res){
// Users.find({UID:req.body.UID}).then(doc=>{
//     if(doc!==null){
//         const user= new Users({
//             name:req.body.name,
//             email:req.body.email,
//             UID:req.body.UID
//         })
//         user.save();
//     }
// })
// res.redirect("http://localhost:3000/")
// })
