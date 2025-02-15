import { baseApi } from "@/redux/api/baseApi";
import { TLoginSchema, TRegisterSchema } from "@/types/formTypes";

const apiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/user",
    }),

    createUser: builder.mutation<any, TRegisterSchema>({
      query: (formData) => ({
        url: "/user/create",
        method: "POST",
        body: formData,
      }),
    }),

    loginUser: builder.mutation<any, TLoginSchema>({
      query: (formData) => ({
        url: "/auth/login",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation, useLoginUserMutation } =
  apiSlice;
