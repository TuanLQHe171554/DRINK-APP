

import express from 'express'
import { env } from './config/environment'
import { CONNECT_DB, GET_DB } from './config/mongodb'
import { errorHandlingMiddleware } from './middlewares/erroHandlingMiddlewares'
import { corsOptions } from './config/cors'
import cookieParser from 'cookie-parser'
import { APIs_V1 } from './routes/v1'
var cors = require('cors')

const START_SERVER = () => {
  const app = express()

  app.use((req, res, next) => {
    res.set('Cache-Control', ' no-store')
    next()
  })

  app.use(cookieParser())

  const hostname = env.APP_HOST
  const port = env.APP_PORT

  app.use(cors(corsOptions))

  app.use(express.json())


  app.use('/api/v1', APIs_V1)

  //middleware erro (allways in last)
  app.use(errorHandlingMiddleware)

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello ${env.AUTHOR}, I am running at http://${hostname}:${port}/`)
  })
}

CONNECT_DB()
  .then(() =>
    // eslint-disable-next-line no-console
    console.log('Connected database successfully !'))
  .then(() => START_SERVER())
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error)
    process.exit(0)
  })


