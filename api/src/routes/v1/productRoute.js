import { ProductController } from '~/controllers/productController'

const express = require('express')
const Router = express()

Router.route('/')
  .get(ProductController.getAll)

Router.route('/:id')
  .get(ProductController.getDetails)

export const ProductRouter = Router