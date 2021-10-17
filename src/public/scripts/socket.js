
const flightDatas = {
    rocketVelocity: {
        x: [],
        y: [],
        z: []
    },
    rocketOrientation: {
        x: [],
        y: [],
        z: []
    },
    time: []
}

const socket = io()

socket.on("connect", () => {
    setLog(`Conected as ${socket.id}`)
    createCharts()
})

socket.on("teleData", (data) => {

    flightDatas["rocketVelocity"].x.push(data["rocketVelocity"].x)
    flightDatas["rocketVelocity"].y.push(data["rocketVelocity"].y)
    flightDatas["rocketVelocity"].z.push(data["rocketVelocity"].z)

    flightDatas["rocketOrientation"].x.push(data["rocketOrientation"].x)
    flightDatas["rocketOrientation"].y.push(data["rocketOrientation"].y)
    flightDatas["rocketOrientation"].z.push(data["rocketOrientation"].z)

    flightDatas["time"].push(flightDatas.time.length + 0.100)
    createCharts()
})

socket.on("rocketConnected", id => setLog("The Rocket has been connected!"))