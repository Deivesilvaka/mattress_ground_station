
async function prepareDatas() {

    const dataLimit = 12

    if(flightDatasChart.time.length >= dataLimit) {

        flightDatasChart.time.shift()

        flightDatasChart["rocketVelocity"].x.shift()
        flightDatasChart["rocketVelocity"].y.shift()
        flightDatasChart["rocketVelocity"].z.shift()

        flightDatasChart["rocketOrientation"].x.shift()
        flightDatasChart["rocketOrientation"].y.shift()
        flightDatasChart["rocketOrientation"].z.shift()
    }
}

async function setData(data) {
    const { rocketVelocity, rocketOrientation } = data

    flightDatas["rocketVelocity"].x.push(rocketVelocity["x"])
    flightDatas["rocketVelocity"].y.push(rocketVelocity["y"])
    flightDatas["rocketVelocity"].z.push(rocketVelocity["z"])

    flightDatas["rocketOrientation"].x.push(rocketOrientation['x'])
    flightDatas["rocketOrientation"].y.push(rocketOrientation['y'])
    flightDatas["rocketOrientation"].z.push(rocketOrientation['z'])

    flightDatas["time"].push(flightDatas.time.length + 0.3)

    flightDatasChart["rocketVelocity"].x.push(rocketVelocity["x"])
    flightDatasChart["rocketVelocity"].y.push(rocketVelocity["y"])
    flightDatasChart["rocketVelocity"].z.push(rocketVelocity["z"])

    flightDatasChart["rocketOrientation"].x.push(rocketOrientation['x'])
    flightDatasChart["rocketOrientation"].y.push(rocketOrientation['y'])
    flightDatasChart["rocketOrientation"].z.push(rocketOrientation['z'])

    flightDatasChart["time"].push(flightDatas.time.length + 0.3)
}

async function downloadFlightDatas() {

    const filename = prompt("type de filename")
    //const filename = 'Falcon Heavy flight 1'

    const body = await JSON.stringify({ flightDatas, filename })
    
    const response = await fetch('/save', {
        method: "POST",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body
    })

    const { path } = await response.json()
    
    const location = window.location.href

    const url = `${location}download?path=${path}`
    window.location = url
}