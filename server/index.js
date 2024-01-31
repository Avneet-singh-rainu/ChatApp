const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", fnc);

function fnc(socket) {
  io.emit("welcome", `Joined server ${socket.id}`);

  socket.on("message", (data) => {
    // Broadcast the message to all connected clients
    socket.broadcast.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
}

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
