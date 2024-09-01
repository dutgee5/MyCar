import { configureStore, createReducer } from "@reduxjs/toolkit";
import { categoryApi } from "../services/categoryApi";
import vehicleApi from "../services/vehicleApi";
import vehicleReducer from "./redux/vehicleSlice";
import categoryReducer from "./redux/categorySlice";


export const store = configureStore({
  reducer: {
    vehicleStore: vehicleReducer,
    categoryStore: categoryReducer,

    [categoryApi.reducerPath]: categoryApi.reducer,
    [vehicleApi.reducerPath]: vehicleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      vehicleApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
