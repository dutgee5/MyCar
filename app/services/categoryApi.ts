import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    CreateCategory: builder.mutation({
      query: (categoryModel) => ({
        url: "Category",
        method: "POST",
        body: categoryModel,
      }),
    }),
    GetAllCategory: builder.query({
      query: () => ({
        url: "Category",
        method: "GET",
      }),
    }),
    RemoveCategory: builder.mutation({
      query: (categoryId) => ({
        url: `Category/${categoryId}`,
        method: "DELETE",
      }),
    }),
    UptadeCategory: builder.mutation({
      query: (model) => ({
        url: `Category/${model.categoryId}`,
        method: "PUT",
        body: model.categoryModel,
      }),
    }),
    GetVehiclesByCategoryId: builder.query({
      query: (categoryId) => ({
        url: `Category/GetVehicles/${categoryId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoryQuery,
  useRemoveCategoryMutation,
  useUptadeCategoryMutation,
} = categoryApi;
export default categoryApi;
