// const cors = require('cors')
// const routes = require('./routes')
// const bodyParser = require('body-parser')
// app.use(routes)
// app.listen(PORT, () => {
//     try {
//         console.log(`server is running on port ${PORT}`)
//     } catch (err) {
//         console.log(err)
//     }
// })

import {config} from "dotenv";

const PORT = process.env.PORT || 3000

import * as dotenv from 'dotenv'
dotenv.config()
import indexRouter from "./routes";
import errorHandler from "./error/errorHandler";
import * as bodyParser from "body-parser";
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'
const express = require('express')
const app = express()
app.use(cors({
    credentials: true,
    origin: true
}))
app.use(express.static('uploads'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(indexRouter)
app.use(errorHandler)

const models = require('./models/models')

app.listen(PORT, async () =>{
    try {
        console.log(`server is running on port ${PORT}`)
        console.log('is connected')
    } catch (e) {
        console.log(e)
    }
})