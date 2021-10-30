const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "pokertrainerdb"
})


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/login", (req, res) => {

    const sqlInsert = 'SELECT * FROM user WHERE userName="' + req.body.userName + '" && password="' + req.body.password + '"'

    db.query(sqlInsert, (err, result) => {
        res.send(result)
    })
})

app.get("api/getAllUsers", (req, res) => {
    const sqlInsert = 'SELECT * FROM user'

    db.query(sqlInsert, (err, result) => {
        console.log(err)
        console.log(result)
        res.send(result)
    })
})

app.post("/api/insert", (req, res) => {

    const userName = req.body.userName
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email

    const sqlInsert = "INSERT INTO user (userName, password, firstName, lastName, email) VALUES (?,?,?,?,?)"

    db.query(sqlInsert, [userName, password, firstName, lastName, email], (err, result) => {
        console.log(err)
    })
})

app.listen(3001, () => {
    console.log("running on port 3001")
})