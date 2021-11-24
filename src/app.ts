import express, { Request, Response } from 'express'
import 'dotenv/config.js'
import connectDB from './db/connect'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json('Hello new World!')
})

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!)
    app.listen(port, () => console.log(`Server is listening on port ${port}...`))
  } catch (err) {
    console.log(err)
  }
}

start()
