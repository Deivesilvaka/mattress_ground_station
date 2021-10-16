
const flightDatas = {
    rocketVelocity: {
        x: [],
        y: [],
        mode: "lines"
    },
    rocketOrientation: {
        x: [],
        y: [],
        mode: "lines"
    }
}

const socket = io()

socket.on("connect", () => {
    setLog(`Conected as ${socket.id}`)
    createCharts()
})