import { createSlice } from "@reduxjs/toolkit";
import { getProductsData } from "@/lib/getData";
import { ProductData } from "../../type";

interface UserInfo {
    id: string;
    name: string;
    email: string;
}

interface InitialState {
    cart:ProductData[],
    wishlist: ProductData[],
    userInfo: UserInfo | null;
}

const initialState: InitialState = {
    cart: [],
    wishlist: [],
    userInfo: null,
};

export const shoppersSlice=createSlice({
    name: 'shoppers',
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const existingProduct = state.cart.find((item) => item._id === action.payload._id);
            if(existingProduct){
                existingProduct.quantity += 1;
            } else {
                state.cart.push(action.payload)
            }
        },

        increaseQuantity: (state, action) => {
            const existingProduct = state.cart.find(
                (item) => item._id === action.payload
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const existingProduct = state.cart.find(
                (item) => item._id === action.payload
            );

            if (existingProduct) {
                existingProduct.quantity -= 1;
            }
        },
        removeFromCart: (state, action)=> {
            state.cart = state.cart.filter((item) => item._id!== action.payload);
        },
        resetCart: (state) => {
            state.cart = [];
        },
        addToWishList: (state, action)=>{
            const existingProduct = state.wishlist.find((item) => item._id === action.payload._id);
                state.cart.push(action.payload)
        },
        resetWishList: (state) => {
            state.wishlist = [];
        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
    },
})

export const { 
    addToCart, 
    increaseQuantity,
    decreaseQuantity, 
    removeFromCart, 
    resetCart, 
    addToWishList, 
    resetWishList, 
    addUser, 
    removeUser,
 } = shoppersSlice.actions;
export default shoppersSlice.reducer;