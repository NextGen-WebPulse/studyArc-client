import { baseApi } from "@/redux/api/baseApi";

const apiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user",
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
