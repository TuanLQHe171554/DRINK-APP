import { StatusCodes } from "http-status-codes"
import { ObjectId } from "mongodb"
import { GET_DB } from "~/config/mongodb"
import ApiError from "~/utils/ApiError"

const Joi = require("joi")
const { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } = require("~/utils/validations")

const CATEGORY_COLLECTION = 'Categorys'
const CATEGORY_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().min(3).max(200).trim().strict().required(),

  _destroy: Joi.boolean().default(false)
})

const getDetails = async (id) => {
  try {
    //
    const result = await GET_DB().collection(CATEGORY_COLLECTION).aggregate([
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
    const result = await GET_DB().collection(CATEGORY_COLLECTION).find().toArray()

    return result
  } catch (error) {
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Not found')
  }
}

const findById = async (id) => {
  try {
    return await GET_DB().collection(CATEGORY_COLLECTION).findOne({ _id: new ObjectId(id) })
  } catch (error) {
    throw new Error(error)
  }
}

export const categoryModel = {
  CATEGORY_COLLECTION,
  CATEGORY_COLLECTION_SCHEMA,
  findById,
  getDetails,
  getAll
}