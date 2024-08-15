import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Blog {
  _id: string;
  title: string;
  image: string;
  description: string;
  read_time: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://content-management-server-alpha.vercel.app",
  }),
  tagTypes: ["blogs"],
  endpoints: (builder) => ({
    getBlogs: builder.query<Blog[], void>({
      query: () => "/blogs",
      providesTags: ["blogs"],
    }),
  }),
});

export const { useGetBlogsQuery } = apiSlice;
