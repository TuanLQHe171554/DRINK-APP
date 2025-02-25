import { StatusCodes } from "http-status-codes"
import { productService } from "~/services/productService"

const getDetails = async (req, res, next) => {
  try {
    const id = req.params.id

    const board = await productService.getDetails(id)

    return res.status(StatusCodes.OK).json(board)
  } catch (error) {
    next(error)
  }
}

const getAll = async (req, res, next) => {
  try {

    const board = await productService.getAll()

    return res.status(StatusCodes.OK).json(board)
  } catch (error) {
    next(error)
  }
}

export const ProductController = {
  getDetails,
  getAll
}