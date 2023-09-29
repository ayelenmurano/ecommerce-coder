import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "../services/dataApi";
import authSlice from "./slices/auth";
import uiReducer from "./slices/ui";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    [dataApi.reducerPath]: dataApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});
