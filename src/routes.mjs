
import { Router } from "express"
import FlightController from "./flightDataController/flightsController.mjs"

const routes = Router()

let sockets = {}

//Função para setar o servidor de websockets aqui nas rotas
function setSockets(socket) {
    sockets = socket
    socketServer()
}

//Eventos do servidor
function socketServer() {
    //Conexão do computador do foguete
    sockets.on("connection", (socket) => {
        console.log(`socket ${socket.id} has been connected`)

        //Desconexão do do computador do foguete
        socket.on("disconnect", () => {
            console.log(`socket ${socket.id} has been disconnected`)
        })

        //Chegada de pacotes de telemetria
        socket.on("teleData", (data) => {
            //Envio da telemetria para o frontend
            sockets.emit("teleData", data)
        })

        //Envio do sinal de que o foguete foi conectado para o frontend
        socket.on("rocketConnected", id => sockets.emit("rocketConnected", id))

        socket.on('flightFinished', () => {
            sockets.emit('flightFinished', 1)
        })

    })
}

//Rota do painel de telemetria
routes.get("/", (req, res) => {

    //Headers de cross origin liberada
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    })

    res.sendFile("index.html")
})

//Rota para salvar os dados do vôo
routes.post('/save', FlightController.saveFlight)
routes.get('/download', FlightController.download)

export default {
    routes,
    setSockets
}