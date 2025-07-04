const { privateDecrypt } = require("crypto");
const express = require("express")
const path = require("path")
const app = express();
const port = 3000;

app.use(express.static("src/client"));
app.use(express.json());

var products = [
  {id:1,name:"LED TV",price: 50000},
  {id:1,name:"LED TV",price: 50000},
  {id:1,name:"LED TV",price: 50000}
];
app.get("/products",(req,res)=>{
  res.json(products);
});

app.post("/newproducts",(req,res)=>{
  const payload = req.body;
  console.log(payload);
  products.push(payload);

  res.send("Data Received");
})

app.listen(port,()=>{
  console.log("Working");
})