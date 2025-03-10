import { StatusCodes } from "http-status-codes"
import { cartService } from "~/services/cartService"

const getCartByUserId = async (req, res, next) => {
  try {
    const userId = req.jwtDecoded._id

    const result = await cartService.getCartByUserId(userId)

    return res.status(StatusCodes.OK).json(result)
  } catch (error) {
    next(error)
  }
}

export const cartController = {
  getCartByUserId
}