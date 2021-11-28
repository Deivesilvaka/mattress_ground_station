
async function createCharts() {
    
    async function createVelocityChart() {
        const layout = {
            title: "Velocity Telemetry"
        }

        const xVelocity = {
            x: flightDatasChart.time,
            y: flightDatasChart.rocketVelocity.x,
            name: "xVelocity",
            mode: "lines"
        }

        const yVelocity = {
            x: flightDatasChart.time,
            y: flightDatasChart.rocketVelocity.y,
            name: "yVelocity",
            mode: "lines"
        }

        const zVelocity = {
            x: flightDatasChart.time,
            y: flightDatasChart.rocketVelocity.z,
            name: "zVelocity",
            mode: "lines"
        }

        const flightChart = [ xVelocity, yVelocity, zVelocity ]

        await Plotly.newPlot("velocity", flightChart, layout)
    }

    async function createOrientationChart() {
        const layout = {
            title: "Orientation Telemetry"
        }

        const xOrientation = {
            x: flightDatasChart.time,
            y: flightDatasChart.rocketOrientation.x,
            name: "xOrientation",
            mode: "lines"
        }

        const yOrientation = {
            x: flightDatasChart.time,
            y: flightDatasChart.rocketOrientation.y,
            name: "yOrientation",
            mode: "lines"
        }

        const zOrientation = {
            x: flightDatasChart.time,
            y: flightDatasChart.rocketOrientation.z,
            name: "zOrientation",
            mode: "lines"
        }

        const flightChart = [ xOrientation, yOrientation, zOrientation ]

        await Plotly.newPlot("orientation", flightChart, layout)
    }

    await createVelocityChart()
    await createOrientationChart()
    
}