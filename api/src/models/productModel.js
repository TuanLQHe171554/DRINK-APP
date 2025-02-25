import { StatusCodes } from "http-status-codes"
import { ObjectId } from "mongodb"
import { GET_DB } from "~/config/mongodb"
import ApiError from "~/utils/ApiError"

const Joi = require("joi")
const { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } = require("~/utils/validations")

const PRODUCTS_COLLECTION = 'Products'
const PRODUCTS_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().min(3).max(200).trim().strict().required(),
  slug: Joi.string().min(3).trim().strict().required(),

  description: Joi.string().min(3).max(1000).trim().strict().required(),
  price: Joi.number().min(0).required(),
  image: Joi.string().min(3).trim().strict().required(),

  categoryId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).required(),
  manIngredientId: Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE).required(),

  numberView: Joi.number().min(0).default(0),
  numberBuy: Joi.number().min(0).default(0),

  status: Joi.boolean().default(true),

  _destroy: Joi.boolean().default(false)
})

const getDetails = async (id) => {
  try {
    //
    const result = await GET_DB().collection(PRODUCTS_COLLECTION).aggregate([
      {
        $match: {
          _id: new ObjectId(id)
        }
      }
    ]).toArray()

    return result[0] || {}
  } catch (error) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Not found')
  }
}

const getAll = async () => {
  try {
    //
    const result = await GET_DB().collection(PRODUCTS_COLLECTION).find().toArray()

    return result
  } catch (error) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Not found')
  }
}

const findById = async (id) => {
  try {
    return await GET_DB().collection(PRODUCTS_COLLECTION).findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}

export const productModel = {
  PRODUCTS_COLLECTION,
  PRODUCTS_COLLECTION_SCHEMA,
  findById,
  getDetails,
  getAll
}