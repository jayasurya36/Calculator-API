const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
const calculate = require('./calculate')
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send("Hello World!")
})
app.post('/add', (req, res) => {
    res.json(calculate("add", req.body.num1, req.body.num2))
})
app.post('/sub', (req, res) => {
    res.json(calculate("sub", req.body.num1, req.body.num2))
})
app.post('/multiply', (req, res) => {
    res.json(calculate("multiply", req.body.num1, req.body.num2))
})
app.post('/divide', (req, res) => {
    res.json(calculate("divide", req.body.num1, req.body.num2))
})
app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;