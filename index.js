const express = require('express')
const app = express()

app.use('/calcular2/:num1/:num2', (request, response) => {
    // console.log(request)
    let num1 = request.params['num1']
    console.log(num1)
    let json = { info: "Hola desde calcular 2" }
    json.num1 = num1

    response.send(json)
})


const enrutadorOperaciones = require('./routes/operaciones.js')
app.use(enrutadorOperaciones)



app.use('/calcular', (request, response) => {
    response.send("saludos desde api")
})

const port = 3100
app.listen(port, () => {
    console.log('El servidor se está ejecutando en el puerto: ' + port)
})