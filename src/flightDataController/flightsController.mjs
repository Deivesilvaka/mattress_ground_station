
import { pipeline } from 'stream'
import { createWriteStream, realpathSync } from 'fs'
import { join } from 'path'
import { promisify } from 'util'

export default class FlightController {
    static async saveFlight(req, res) {
        const { flightDatas, filename } = req.body

        //Converter pipeline de callback para promise
        const Pipeline = await promisify(pipeline)
        const path = join(realpathSync('.'), 'src', 'flightDataController', 'flights', `${filename}.json`)

        //Execução da pipeline assincrona da stream.
        await Pipeline(
            JSON.stringify(flightDatas),
            createWriteStream(path)
        )

        return res.json({path})
    }

    //Download dos dados de voo.
    static async download(req, res) {
        const { path } = req.query
        return res.download(path)
    }
}