import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducres/user";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
