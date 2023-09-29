import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  idToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIdToken: (state, action) => {
      state.idToken = action.payload;
    },
    clearUser: (state) => {
      (state.user = null), (state.idToken = null);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setIdToken, clearUser } = authSlice.actions;

export default authSlice.reducer;
