import {configureStore} from '@reduxjs/toolkit'
import userReducer from './feature/userSlice'
import cartReducer from './feature/cartSlice'

export default configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer,
    }
})
