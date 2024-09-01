import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  categoryId: "",
};

export const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { getAllCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
