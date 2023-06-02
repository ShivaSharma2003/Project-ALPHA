import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'

const app = express();

dotenv.config()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({"Message" : "Hello World!"});
})

app.listen(process.env.PORT , () =>
{
    console.log(`Listening on ${process.env.PORT}`)
})

