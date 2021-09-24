
import express from 'express'
import cors from 'cors'
import router from './src/routes.mjs'
import http from "http"
import { Server } from "socket.io"

const app = express()

const server = http.createServer(app)

const sockets = new Server(server, {
    cors: {
        origin: "*",
        credentials: false
    }
})

app.use(cors())
app.use(express.static('./src/public'))
app.use(express.json())
router.setSockets(sockets)
app.use(router.routes)

server.listen(process.env.PORT || 3000, () => console.log("rodando server"))
