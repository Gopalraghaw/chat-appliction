const express=require('express');
 const app=express();
 const http=require('http');
const  socketIO = require('socket.io');

 app.set("view engine",'hbs');
 app.get("/",(req,res)=>{
      res.render("index")
 })
 const server=http.createServer(app);

 const io =socketIO(server)

 server.listen(3000,()=>{
    console.log("server is listening on port 3000")
 })

 io.on("connection",function(socket){
    console.log("A user connected",socket.id);

    socket.on("message",(data)=>{
        console.log("message from client",data);
     socket.broadcast.emit("message", data) 
        
    });
    socket.on("end",()=>{
        console.log("user left")
    })
    
}) ;