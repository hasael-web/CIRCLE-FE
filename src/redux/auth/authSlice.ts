import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RegisterType } from "@/types";
import { API } from "@/utils/api";
import { AxiosError, AxiosResponse } from "axios";

type initialStateT = {
  isLoading: boolean;
  isError: boolean;
  error: string;
  isRegisterSuccess: boolean;
};

const initialState: initialStateT = {
  isLoading: false,
  isError: false,
  error: "",
  isRegisterSuccess: false,
};

export const register = createAsyncThunk<
  AxiosResponse<unknown, unknown>,
  RegisterType,
  { rejectValue: { errorMessage: string } }
>("auth/register", async (data: RegisterType, { rejectWithValue }) => {
  try {
    const response = await API.post("/api/v1/register", data);
    return response.data;
  } catch (error) {
    let errorMessage: string = "";
    if (error instanceof AxiosError) {
      if (error.response) {
        errorMessage = error.response?.data.error;
      }
    }

    return rejectWithValue({ errorMessage });
  }
});

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
      state.isRegisterSuccess = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload?.errorMessage || "Unknown Error Occured";
      state.isRegisterSuccess = false;
    });
  },
});

export default authSlice.reducer;
