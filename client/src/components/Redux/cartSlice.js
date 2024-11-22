import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSice",
    initialState: {
        cartItems: [],
        counter : 0,
        showCartCounter: 0,
        carItemAndQuantity : 0
    },
    reducers: {
        cartItemCounter: (state, action) => {
            state.counter += 1
        },
        showCartItemCounter: (state, action) => {
            state.showCartCounter += 1
        },
        cartItemWithQuantityCounter: (state, action) => {
            state.carItemAndQuantity += 1  
        },
        addToCart: (state, action) => {
            // const product = state.cartItems.find(item => {
            //    return item.id == action.payload.id
            // })
            
            // if (product) {
            //     alert("The Selected Product Already in the cart increase quantity instead")
            // }
            // else {
                state.cartItems.push(action.payload);
                
            //}
            
        },
        removeCartItem: (state, action) => {
            return {
                
                cartItems: state.cartItems.filter(item => item.id != action.payload)
           }
        },
        increaseQty: (state, action) => {
            const product = state.cartItems.find(item => {
                return item.id == action.payload
            })
            product.qty += 1;
        },
         decreaseQty: (state, action) => {
             const product = state.cartItems.find(item => {
               return  item.id == action.payload
             })
            
             if (product.qty == 1) {
                return
             } else {
                 product.qty -= 1
            }
            
        }
    }
});

export const { addToCart , removeCartItem , increaseQty , decreaseQty , cartItemCounter , showCartItemCounter, cartItemWithQuantityCounter} = cartSlice.actions

export default cartSlice.reducer