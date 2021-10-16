

function createCharts() {
    
    function createVelocityChart() {
        const layout = {
            title: "Velocity Telemetry"
        }

        Plotly.newPlot("velocity", [flightDatas.rocketVelocity], layout)
    }

    function createOrientationChart() {
        const layout = {
            title: "Orientation Telemetry"
        }

        Plotly.newPlot("orientation", [flightDatas.rocketOrientation], layout)
    }

    createVelocityChart()
    createOrientationChart()
    
}