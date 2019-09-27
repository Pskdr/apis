const express = require('express')
const enrutador = express.Router()

enrutador.get('/resta/:num1/:num2', (request, response) => {
    // console.log(request)
    let num1 = request.params['num1']
    let num2 = request.params['num2']
    console.log(num1)
    let json = { info: "Hola desde resta prr" }
    json.num1 = num1
    let resta = num1 - num2
    json.num2 = num2
    json.resta = resta
    response.send(json)
})
enrutador.get('/multi/:num1/:num2', (request, response) => {
    // console.log(request)
    let num1 = request.params['num1']
    let num2 = request.params['num2']
    console.log(num1)
    let json = { info: "Hola desde multi prr" }
    json.num1 = num1
    let multi = num1 * num2
    json.num2 = num2
    json.multi = multi
    response.send(json)
})
enrutador.get('/suma/:num1/:num2', (request, response) => {
    // console.log(request)
    let num1 = request.params['num1']
    let num2 = request.params['num2']
    console.log(num1)
    let json = { info: "Hola desde router prr" }
    json.num1 = num1
    let resta = num1 + num2
    json.num2 = num2
    json.suma = suma
    response.send(json)
})
enrutador.get('/div/:num1/:num2', (request, response) => {
    // console.log(request)
    let num1 = request.params['num1']
    let num2 = request.params['num2']
    console.log(num1)
    let json = { info: "Hola desde router prr" }
    json.num1 = num1
    var div = "nada"
    if (num2 == 0) {
        json.div = 'no se puede realizar'
    } else {
        div = num1 / num2
        json.div = div
    }

    json.num2 = num2

    response.send(json)
})
module.exports = enrutador