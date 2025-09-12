import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../axiosConfig";

export const contactForm = createAsyncThunk(
    "contact/contactForm",
    async (formdata) => {
        try {
            const response = await axiosConfig.post("/contact/contact", formdata);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Something went wrong");
        }
    }
);

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        loading: false,
        success: null,
        error: null,
    },
    reducers: {
        resetState: (state) => {
            state.loading = false;
            state.success = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(contactForm.pending, (state) => {
                state.loading = true;
                state.success = null;
                state.error = null;
            })
            .addCase(contactForm.fulfilled, (state, action) => {
                state.loading = false;
                state.success = action.payload.message;
            })
            .addCase(contactForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export const { resetState } = contactSlice.actions;
export default contactSlice.reducer;