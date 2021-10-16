
async function createCharts() {
    
    async function createVelocityChart() {
        const layout = {
            title: "Velocity Telemetry"
        }

        const xVelocity = {
            x: flightDatas.rocketVelocity.time,
            y: flightDatas.rocketVelocity.x,
            name: "xVelocity"
        }

        const yVelocity = {
            x: flightDatas.rocketVelocity.time,
            y: flightDatas.rocketVelocity.y,
            name: "yVelocity"
        }

        const zVelocity = {
            x: flightDatas.rocketVelocity.time,
            y: flightDatas.rocketVelocity.z,
            name: "zVelocity"
        }

        const flightChart = [ xVelocity, yVelocity, zVelocity ]

        await Plotly.newPlot("velocity", flightChart, layout)
    }

    async function createOrientationChart() {
        const layout = {
            title: "Orientation Telemetry"
        }

        const xOrientation = {
            x: flightDatas.rocketOrientation.time,
            y: flightDatas.rocketOrientation.x,
            name: "xOrientation"
        }

        const yOrientation = {
            x: flightDatas.rocketOrientation.time,
            y: flightDatas.rocketOrientation.y,
            name: "yOrientation"
        }

        const zOrientation = {
            x: flightDatas.rocketOrientation.time,
            y: flightDatas.rocketOrientation.z,
            name: "zOrientation"
        }

        const flightChart = [ xOrientation, yOrientation, zOrientation ]

        await Plotly.newPlot("orientation", flightChart, layout)
    }

    createVelocityChart()
    createOrientationChart()
    
}