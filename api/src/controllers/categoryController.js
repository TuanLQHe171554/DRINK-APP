import { StatusCodes } from "http-status-codes"
import { categoryService } from "~/services/categotyService"

const getAll = async (req, res, next) => {
  try {
    const result = await categoryService.getAll()

    return res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)
  }
}

export const categoryController = {
  getAll
}