import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "../features/ticket/ticketsSlice";

export const store = configureStore(
  {
    reducer: {
      tickets: ticketsReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
