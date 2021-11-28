
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

const flightDatasChart = {
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

socket.on("teleData", async (data) => {

    await prepareDatas()
    await setData(data)
    await createCharts()
    
})

socket.on("rocketConnected", id => {
    //document.querySelector("#downloadButton").style.display = "none"
    setLog("The Rocket has been connected!")
})

socket.on("flightFinished", one => {
    //document.querySelector("#downloadButton").style.display = "inline"
    setLog("The Flight has been finished!")
})