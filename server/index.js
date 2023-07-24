const express = require("express");
const http = require("http");
const { Server } = require("socket.io")
const cors = require("cors");
const app = express();

app.use(cors())
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:8080"
    }
});

server.listen(3000, () => {
    console.log("Server is running")
})