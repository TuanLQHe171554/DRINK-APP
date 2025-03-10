import axios from "../utils/axiosCustomiz."
import { toast } from "react-toastify"

//Products API
export const fetchAllProductsAPIs = async () => {
  return axios.get('api/v1/products')
}

// user APIs 

export const registerUserAPI = async (userData: any) => {
  const res = await axios.post(`v1/users/register`, userData)
  toast.success('Account created successfully!, Please check and verify your account before login.')
  return res
}


export const verifyUserAPI = async (data: any) => {
  const res = await axios.put(`v1/users/verify`, data)
  toast.success('Account verify successfully!, Now you can login to enjoy our services!')
  return res
}


export const refreshTokenAPI = async () => {
  return await axios.get(`v1/users/refresh_token`)
}

export const fetchAllUsersAPI = async () => {
  return await axios.get(`api/v1/users`)
}