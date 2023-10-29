import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RegisterType } from "@/types";
import { API } from "@/utils/api";

type initialStateT = {
  isLoading: boolean;
  isError: boolean;
  error: string;
};

const initialState: initialStateT = {
  isLoading: false,
  isError: false,
  error: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (data: RegisterType) => {
    const response = await API.post("/api/v1/register", data);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message || "Unknown Error Occured";
    });
  },
});

export default authSlice.reducer;
