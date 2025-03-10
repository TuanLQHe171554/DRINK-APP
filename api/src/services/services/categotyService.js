import { categoryModel } from "~/models/categoryModel"


const getAll = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const result = await categoryModel.getAll()

    return result
  } catch (error) {
    throw error
  }
}

export const categoryService = {
  getAll
}