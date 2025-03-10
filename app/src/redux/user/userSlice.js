import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from "../../utils/axiosCustomiz";


//declare value state of slice in redux
const initialState = {
  currentUser: null,
}


//xử lí catching api bất đồng bộ
export const loginUserAPI = createAsyncThunk(
  'user/loginUserAPI',
  async (data) => {
    return await axios.post(`api/v1/users/login`, data)
  }
)

export const registerUserAPI = createAsyncThunk(
  'user/registerUserAPI',
  async (data) => {
    return await axios.post(`api/v1/users/register`, data)
  }
)


export const logoutUserAPI = createAsyncThunk(
  'user/logoutUserAPI',
  async (showSuccessMessage = true) => {
    const response = await axios.delete('v1/users/logout')
    if (showSuccessMessage) {
      toast.success('Logout successfully!')
    }
    return response
  }
)


export const updateUserAPI = createAsyncThunk(
  'user/updateUserAPI',
  async (data) => {
    return await axios.put(`v1/users/update`, data)
  }
)


//declare silce in redux store
export const userSlice = createSlice({
  name: 'user',
  initialState,
  // reducer : nơi xửu lý dữ liệu đồng bộ
  reducers: {


  },
  //extraReducers: Nơi xửu lý dũ liệu bất đồng bộ
  extraReducers: (builder) => {
    builder.addCase(loginUserAPI.fulfilled, (state, action) => {
      const user = action.payload
      state.currentUser = user
    })

    builder.addCase(registerUserAPI.fulfilled, (state, action) => {
      const user = action.payload
      state.currentUser = user
    })


    builder.addCase(logoutUserAPI.fulfilled, (state) => {
      state.currentUser = null
    })


    builder.addCase(updateUserAPI.fulfilled, (state, action) => {
      const user = action.payload
      state.currentUser = user
    })
  }
})


// Action creators are generated for each case reducer function
// export const { } = userSlice.actions


export const selectCurrentUser = (state) => {
  return state.user.currentUser
}


export const userReducer = userSlice.reducer