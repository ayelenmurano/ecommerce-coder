import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/ui";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});
