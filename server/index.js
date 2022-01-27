const mongoose = require('mongoose');
const express = require('express');
const connectDb = require('./db/db');
const routes = require('./routes/todos.routes')
require('dotenv').config()

const app = express()
app.use(express.json())

const port = 3000

connectDb()


async function main() {

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
    app.use('', routes)

}
main().catch(err => console.log(err));