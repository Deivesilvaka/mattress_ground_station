
import { Router } from "express"
import FlightController from "./flightDataController/flightsController.mjs"

const routes = Router()

//Rota do painel de telemetria
routes.get("/", (req, res) => {

    //Headers de cross origin liberada
    res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    })

    res.sendFile("index.html")
})

//Rota para salvar os dados do vôo
routes.post('/save', FlightController.saveFlight)
routes.get('/download', FlightController.download)

export default routes