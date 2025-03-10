import { StatusCodes } from "http-status-codes"
import { productModel } from "~/models/productModel"
import ApiError from "~/utils/ApiError"

const getDetails = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const exitProduct = await productModel.getDetails(id)
    if (!exitProduct) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Product not found')
    }

    return exitProduct
  } catch (error) {
    throw error
  }
}

const getAll = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const result = await productModel.getAll()

    return result
  } catch (error) {
    throw error
  }
}

export const productService = {
  getDetails,
  getAll
}