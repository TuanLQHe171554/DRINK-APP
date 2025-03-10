import { cartModel } from "~/models/cartModal"

const getCartByUserId = async (userId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const result = cartModel.getDetails(userId)

    return result
  } catch (error) {
    throw error
  }
}

export const cartService = {
  getCartByUserId
}