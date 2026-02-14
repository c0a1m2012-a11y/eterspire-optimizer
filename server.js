
const express=require("express");

const data=require("./data/wiki.json");

const optimizer=require("./optimizer");

const simulator=require("./simulator");

const bis=require("./bis");

const exporter=require("./exporter");

const app=express();

app.use(express.json());

app.use(express.static("public"));

app.get("/data",(req,res)=>res.json(data));

app.post("/optimize",(req,res)=>{

 res.json(optimizer.optimize(data,req.body));

});

app.post("/simulate",(req,res)=>{

 res.json(simulator.simulate(req.body));

});

app.get("/bis",(req,res)=>{

 res.json(bis.generate(data));

});

app.get("/export",(req,res)=>{

 res.send(exporter.toCSV(data.items));

});

app.listen(3000,()=>console.log("God Mode Running"));
