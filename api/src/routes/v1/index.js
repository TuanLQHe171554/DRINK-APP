import { ProductRouter } from './productRoute'

const express = require('express')
const Router = express()

Router.use('/products', ProductRouter)

export const APIs_V1 = Router
