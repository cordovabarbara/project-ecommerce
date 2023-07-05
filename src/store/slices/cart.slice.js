import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import configToken from "../../utils/configToken";

const cartSlice = createSlice ({
    name: 'cart',
    initialState: null,
    reducers: {
        setCartGlobal: (state, action) => action.payload
    }
}) 

export const {setCartGlobal}  = cartSlice.actions
export default cartSlice.reducer

export const getAllProductsCartThunk = () => dispatch => {
    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
    const url = `${URL_BASE}/cart`
    
    axios.get(url, configToken())
    .then(res => dispatch (setCartGlobal (res.data)))
    .catch (err => console.log(err))

}