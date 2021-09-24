
import { Router } from "express"
const routes = Router()

let sockets = {}

function setSockets(socket) {
    sockets = socket
    socketServer()
}

function socketServer() {
    sockets.on("connection", (socket) => {
        console.log(`socket ${socket.id} has been connected`)

        socket.on("disconnect", () => {
            console.log(`socket ${socket.id} has been disconnected`)
        })

    })
}

routes.get("/", (req, res) => {

    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    })

    res.sendFile("index.html")
})

export default {
    routes,
    setSockets
}