import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./dataSlice.ts";

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
    },
})

export type RootState = ReturnType<typeof productsSlice.reducer>
export type AppDispatch = typeof store.dispatch