
const flightDatas = {
    rocketVelocity: {
        x: [],
        y: [],
        z: [],
        time: []
    },
    rocketOrientation: {
        x: [],
        y: [],
        z: [],
        time: []
    }
}

const socket = io()

socket.on("connect", () => {
    setLog(`Conected as ${socket.id}`)
    createCharts()
})