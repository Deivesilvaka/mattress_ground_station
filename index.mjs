
import express from 'express'
import cors from 'cors'
import routes from './src/routes.mjs'
import http from "http"
import { Server } from "socket.io"
import socketServer from './src/socketServer/socketServer.mjs'

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

//Levando o servidor de websockets para o controller.
socketServer(sockets)

//Define as rotas
app.use(routes)

server.listen(process.env.PORT || 3000, () => console.log("rodando server"))
