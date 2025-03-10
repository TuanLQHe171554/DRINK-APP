import { StatusCodes } from "http-status-codes"
import { ObjectId } from "mongodb"
import { GET_DB } from "~/config/mongodb"
import ApiError from "~/utils/ApiError"
const Joi = require("joi")
const { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } = require("~/utils/validations")

const CART_COLLECTION = 'Carts'
const CART_COLLECTION_SCHEMA = Joi.object({
  userId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).required(),
  shoppingCart: Joi.array().items(
    Joi.object({
      productId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
      quantity: Joi.number().min(1).required()
    })).optional()
})

const getDetails = async (id) => {
  try {
    //
    const result = await GET_DB().collection(CART_COLLECTION).aggregate([
      {
        $match: {
          userId: new ObjectId(id)
        }
      }
    ]).toArray()

    return result[0] || {}
  } catch (error) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Not found')
  }
}

const findById = async (id) => {
  try {
    return await GET_DB().collection(CART_COLLECTION).findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}

export const cartModel = {
  CART_COLLECTION,
  CART_COLLECTION_SCHEMA,
  findById,
  getDetails

}