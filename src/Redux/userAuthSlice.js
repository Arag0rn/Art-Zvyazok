import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "components/Api";


const initialState = {
  user: {},
  token: {accessToken: null, refreshToken: null},
  isLoggedIn: false,
  isRefreshing: false,
};

const userEmailSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    //fullfilled
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token.accessToken = action.payload.token.accessToken.token;
      state.token.refreshToken = action.payload.token.refreshToken;
      state.isLoggedIn = true;
    })
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    })
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token.accessToken = action.payload.token.accessToken.token;
      state.token.refreshToken = action.payload.token.refreshToken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
    //pending
    builder.addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    })
    //rejected
    builder.addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
    })
  },
});

export const { setEmail } = userEmailSlice.actions;
export const userEmailReducer = userEmailSlice.reducer;