

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