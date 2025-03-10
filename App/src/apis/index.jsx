import Toast from "react-native-toast-message"
import axios from "../utils/axiosCustomiz"

//Products API
export const fetchAllProductsAPIs = async () => {
  return axios.get('api/v1/products')
}

//Categories API
export const fetchAllCategoriesAPIs = async () => {
  return axios.get('api/v1/categories')
}

// user APIs 

export const registerUserAPI = async (userData) => {
  const res = await axios.post(`v1/users/register`, userData)
  Toast.success('Account created successfully!, Please check and verify your account before login.')
  return res
}


export const verifyUserAPI = async (data) => {
  const res = await axios.put(`api/v1/users/verify`, data)
  Toast.success('Account verify successfully!, Now you can login to enjoy our services!')
  return res
}


export const refreshTokenAPI = async () => {
  return await axios.get(`api/v1/users/refresh_token`)
}


//cart APIs
export const fetchCartByUserIdAPIs = async (userId) => {
  return await axios.get(`api/v1/carts`)
}

export const updateCartAPIs = async (data) => {
  return await axios.put(`api/v1/carts`, data)
}