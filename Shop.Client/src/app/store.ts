import { configureStore } from "@reduxjs/toolkit";
import { productsSlice, similarProductsSlice } from "./dataSlice.ts";

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        similarProducts: similarProductsSlice.reducer 
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
