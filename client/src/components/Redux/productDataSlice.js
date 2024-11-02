import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "producSlice",
    initialState: {
        item: []
    },
    reducers: {
        updateProducts: (state, action) => {
            state.item = action.payload
        },
}
   
})
export const { updateProducts } = productSlice.actions

export default productSlice.reducer