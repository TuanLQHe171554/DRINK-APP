import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './user/userSlice'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',//key default is root
  storage: storage,//save to local storage
  whiteList: ['user']//Định nghĩa các slice khi f5 ĐƯỢC PHÉP vẫn lưu giữ 
  //, blacklist: ['user']//Định nghĩa các slice khi f5 KO ĐƯỢC PHÉP vẫn lưu giữ
}

const rootReducer = combineReducers({
  user: userReducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export type AppDispatch = typeof store.dispatch;