
//Eventos do servidor
function socketServer(socketServer) {

    const sockets = socketServer

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

export default socketServer