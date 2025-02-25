import axios from "../utils/axiosCustomiz"

//Products API
export const fetchAllProductsAPIs = async () => {
  return axios.get('api/v1/products')
}