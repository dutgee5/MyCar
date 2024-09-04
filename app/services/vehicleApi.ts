import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const VehicleApi = createApi({
  reducerPath: "VehicleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    CreateVehicle: builder.mutation({
      query: (VehicleModel) => ({
        url: "Vehicle/CreateVehicle",
        method: "POST",
        body: VehicleModel,
      }),
    }),
    GetAllVehicle: builder.query({
      query: () => ({
        url: "Vehicle/GetAllVehicle",
        method: "GET",
      }),
    }),
    RemoveVehicle: builder.mutation({
      query: (VehicleId) => ({
        url: `Vehicle/DeleteVehicle/${VehicleId}`,
        method: "DELETE",
      }),
    }),
    UptadeVehicle: builder.mutation({
      query: (model) => ({
        url: `Vehicle/UpdateVehicle/${model.VehicleId}`,
        method: "PUT",
        body: model.VehicleModel,
      }),
    }),
    GetVehicleById: builder.query({
      query: (vehicleId) => ({
        url: `Vehicle/Vehicle/${vehicleId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateVehicleMutation,
  useGetAllVehicleQuery,
  useRemoveVehicleMutation,
  useUptadeVehicleMutation,
} = VehicleApi;
export default VehicleApi;
