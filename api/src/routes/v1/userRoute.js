import { userController } from '~/controllers/userController'
import { userValidation } from '~/validations/userValidation'

const express = require('express')
const Router = express()

Router.route('/login')
  .post(userValidation.login, userController.login)

export const userRouter = Router