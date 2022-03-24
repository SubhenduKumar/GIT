 // const express=require('express')
 // const app =express(); 

 const app = require("express")();

 const cors = require("cors");
 app.use(cors());

 const { Server } = require('socket.io')

 //  const http = require("http");
 //  const server = http.createServer(app);
 const server = require('http').createServer(app);

 //  const io = require('socket.io')(server) // I can use like this also as shown in the documentation
 const io = new Server(server, {
     cors: {
         origin: "http://localhost:3000",
         methods: ["GET", "POST"],
     },
 })
 io.on("connection", (socket) => {
     const transport = socket.conn.transport.name; // in most cases, "polling"

     socket.conn.on("upgrade", () => {
         const upgradedTransport = socket.conn.transport.name; // in most cases, "websocket"
     });
 });

 io.on("connection", (socket) => {
     console.log("what is socket ", socket, "and id is ", socket.id);
     console.log("Socket is active to be connected");

     //  socket.on("chat", (payload) => {
     //  io.emit("chat", payload)
     // });
     socket.on("join_room", (data) => {
         socket.join(data)
         console.log("User with id:", socket.id, "joined room:", data);

     });
     socket.on("disconnect", () => {
         console.log("User Connected :", socket.id);

     });
 });

 server.listen(3001, () => {
         console.log("Server is Listeing at 5000 Port");
     })
     //  


 //  app.listen(5000,()=>console.log("Server is active"));   //This is not the way we have to create a listing server.