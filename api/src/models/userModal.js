import Joi from "joi"
import { GET_DB } from "~/config/mongodb"
import { EMAIL_RULE, EMAIL_RULE_MESSAGE, PASSWORD_RULE, PASSWORD_RULE_MESSAGE } from "~/utils/validations"

const USER_ROLES = {
  CLIENT: 'client',
  ADMIN: 'admin'
}


const USER_COLLECTION_NAME = 'users'
const USER_COLLECTION_SCHEMA = Joi.object({
  email: Joi.string().pattern(EMAIL_RULE).message(EMAIL_RULE_MESSAGE).required(),
  password: Joi.string().pattern(PASSWORD_RULE).message(PASSWORD_RULE_MESSAGE).required(),


  username: Joi.string().min(3).max(50).trim().strict(),
  displayName: Joi.string().min(3).max(50).trim().strict(),
  bio: Joi.string().min(5).max(250).trim().strict(),
  avatar: Joi.string().default(null),
  role: Joi.string().valid(USER_ROLES.CLIENT, USER_ROLES.ADMIN).default(USER_ROLES.CLIENT),


  isActive: Joi.boolean().default(false),
  verifyToken: Joi.string(),


  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false)
})

const findOneByEmail = async (email) => {
  try {
    return await GET_DB().collection(USER_COLLECTION_NAME).findOne({ email: email })

  } catch (error) {
    throw new Error(error)
  }
}

export const userModal = {
  USER_COLLECTION_NAME,
  USER_COLLECTION_SCHEMA,
  findOneByEmail
}
