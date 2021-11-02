
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

    const { rocketVelocity, rocketOrientation } = data

    flightDatas["rocketVelocity"].x.push(rocketVelocity["x"])
    flightDatas["rocketVelocity"].y.push(rocketVelocity["y"])
    flightDatas["rocketVelocity"].z.push(rocketVelocity["z"])

    flightDatas["rocketOrientation"].x.push(rocketOrientation['x'])
    flightDatas["rocketOrientation"].y.push(rocketOrientation['y'])
    flightDatas["rocketOrientation"].z.push(rocketOrientation['z'])

    flightDatas["time"].push(flightDatas.time.length + 0.100)
    createCharts()
})

socket.on("rocketConnected", id => {
    //document.querySelector("#downloadButton").style.display = "none"
    setLog("The Rocket has been connected!")
})

socket.on("flightFinished", one => {
    //document.querySelector("#downloadButton").style.display = "inline"
    setLog("The Flight has been finished!")
})