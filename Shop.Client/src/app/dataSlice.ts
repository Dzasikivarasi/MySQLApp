import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductBaseData, SimilarProductsType } from "../types";

export type InitialStateProductType = {
    data: ProductBaseData[];
    loading: boolean;
    error: string | null;
}

export type InitialStateSimilarProductType = {
    similarProducts: SimilarProductsType[];
    loading: boolean;
    error: string | null;
}

const initialStateProduct: InitialStateProductType = {
    data: [],
    loading: false,
    error: null,
}

const similarProductsInitialState: InitialStateSimilarProductType = {
    similarProducts: [],
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
    initialState: initialStateProduct,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loadProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload || [];
        });
        builder.addCase(loadProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Ошибка при загрузке данных";
        });
    },
});


export const loadSimilarProducts = createAsyncThunk(
    'products/loadSimilarProducts',
    async (productId: string) => {
        try {
            const API_HOST = `http://${import.meta.env.VITE_LOCAL_PATH}:${import.meta.env.VITE_LOCAL_PORT}/${import.meta.env.VITE_API_PATH}`;
            const response = await axios.get(`${API_HOST}/products/similar/${productId}`);
            return response.data;
        } catch (error) {
            throw Error("Ошибка при загрузке похожих товаров");
        }
    }
);

export const similarProductsSlice = createSlice({
    name: 'similarProducts',
    initialState: similarProductsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadSimilarProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loadSimilarProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.similarProducts = action.payload || [];
        });
        builder.addCase(loadSimilarProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Ошибка при загрузке похожих товаров";
        });
    },
});
