/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTH_LOGIN } from "../api";
import axios from "../api/axios";
import notify from "../utils/notify";
import validateEmail from "../utils/validateEmail";
// First, create the thunk
export const AuthLogin = createAsyncThunk("auth/Login", async (data) => {
  const response = await axios.post(AUTH_LOGIN, data);
  if (!validateEmail(data.email)) return notify(false, "Email không đúng định dạng");
  if (response.data.data && response.data.success === true) {
    notify(response.data.success, response.data.message);
    localStorage.setItem("accessToken-PszOIoxxwFnQgcNb", response.data.data.AccessToken);
    return response.data;
  } else {
    notify(response.data.success, response.data.message);
  }
});
const initialState = {
  loading: false,
  current_user: {},
};
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.current_user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AuthLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(AuthLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.current_user = action.payload;
    });
    builder.addCase(AuthLogin.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
