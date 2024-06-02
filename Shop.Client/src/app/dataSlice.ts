import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductBaseData } from "../types";

export type InitialStateType = {
    mockData: ProductBaseData[];
    loading: boolean;
    error: string | null;
}

const initialState: InitialStateType = {
    mockData: [],
    loading: false,
    error: null,
}

export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async () => {
        try {
            const API_HOST = `http://${import.meta.env.VITE_LOCAL_PATH}:${import.meta.env.VITE_LOCAL_PORT}/${import.meta.env.VITE_API_PATH}`;
            const response = await axios.get(`${API_HOST}/products`);
            return response.data;
        } catch (error) {
            throw Error("Ошибка при загрузке данных");
        }
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loadProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.mockData = action.payload || [];
        });
        builder.addCase(loadProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Ошибка при загрузке данных";
        });
    },
});

export default productsSlice.reducer;
