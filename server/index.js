import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'
import postroutes from './routes/postroutes.js'
import dalleroutes from './routes/dalleroutes.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('api/v1/post', postroutes)
app.use('api/v1/dalle', dalleroutes)

app.get('/', async (req, res) => {
    res.send('Hello from odishaaa');
})

const startServer = async () => {
    try {

        connectDB(process.env.MONGODB_URL);
        app.listen(10100, () => console.log("server has been started on port http://localhost:10100"))
    } catch (error) {
        console.log(error);
    }
}
startServer();