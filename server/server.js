const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId) => {
    socket.join(roomId);
  });

  socket.on("play", ({ roomId, time }) => {
    socket.to(roomId).emit("play", time);
  });

  socket.on("pause", ({ roomId, time }) => {
    socket.to(roomId).emit("pause", time);
  });

  socket.on("chat-message", ({ roomId, message }) => {
    socket.to(roomId).emit("chat-message", message);
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
