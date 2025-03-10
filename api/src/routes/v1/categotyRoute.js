import { categoryController } from '~/controllers/categoryController'

const express = require('express')
const Router = express()

Router.route('/')
  .get(categoryController.getAll)

export const CategoryRouter = Router