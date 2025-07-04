const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
  if(req.url === "/"){
    fs.readFile('Index.html',(err,data)=>{
      if(!err){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data)
      }else{
        res.writeHead(500,{"Content-Type":"text/html"});
        res.end("Something Went Wrong");
      }
    })
  } else if(req.url === "/client.js"){
    fs.readFile("../client/client.js",(err,data)=>{
      if(err){
        res.writeHead(500,{"Content-Type":"text/html"});
        res.end("Something went wrong");
      }
      else{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
      }
    })
  }
  else if(req.url === "/products"){
    var products = [
      {id:1,name:"LED TV",price:50000},
      {id:1,name:"LED TV",price:50000},
      {id:1,name:"LED TV",price:50000}
    ];
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(JSON.stringify(products));
  }
})

const port = 3000;
server.listen(port,()=>{
    console.log("Bankai Senbonzakura")
})