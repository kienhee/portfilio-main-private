/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_PROJECT, GET_ALL_PROJECT } from "../api";
import axios from "../api/axios";
import notify from "../utils/notify";
// First, create the thunk
export const createProject = createAsyncThunk(
  "project/create_project",
  async ({ title, content, github, urlImage }) => {
    let response = await axios.post(CREATE_PROJECT, { title, content, github, urlImage });
    if (response.data.data && response.data.success === true) {
      notify(response.data.success, response.data.message);
    } else {
      notify(response.data.success, response.data.message);
    }
  },
);
export const getallProject = createAsyncThunk("project/get_all_project", async () => {
  let response = await axios.get(GET_ALL_PROJECT);

  if (response.data.data && response.data.success === true) {
    return response.data
  }
});

const initialState = {
  loading: false,
  projects: {},
};
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProject.fulfilled, (state, action) => {
      state.loading = false;
      state.projects = action.payload;
    });
    builder.addCase(createProject.rejected, (state) => {
      state.loading = false;
    });
  },
  extraReducers: (builder) => {
    builder.addCase(getallProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getallProject.fulfilled, (state, action) => {
      state.loading = false;
      state.projects = action.payload;
    });
    builder.addCase(getallProject.rejected, (state) => {
      state.loading = false;
    });
  },
});
// export const { logout } = projectSlice.actions;
export default projectSlice.reducer;
