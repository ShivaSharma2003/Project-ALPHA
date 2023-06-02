import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import { databaseConnection } from './Database/Database.js'
import mongoose from 'mongoose'
import UserRoute from './Routes/UserRoute.js'


// creating express server 
const app = express();

// configuration for cors 
dotenv.config()
app.use(cors())
app.use(express.json())

// database Connection calls
databaseConnection()

// checking if database is succesfully connected or not
const database = mongoose.connection

database.once("close", () => {
    console.log("Database connection Closed")
})

database.once("open", () => {
    console.log("Database connection Successfully Connected")
})

database.on("error", (err) => console.error)

// ----------------------------------------------------------

app.get('/', (req, res) => {
    res.json({ "Message": "Hello World!" });
})


// User Routes
app.use('/user' , UserRoute)

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})

