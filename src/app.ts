import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { allRoutes } from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/not-found'
const app: Application = express()
app.use(express.json())
app.use(cors())

app.use('/api' , allRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.status(200).json('app is running')
})

app.use(globalErrorHandler)
app.use(notFound)

export default app
