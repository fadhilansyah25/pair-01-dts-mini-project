import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const requestTMDbAPI = createApi({
  reducerPath: "requestTMDbAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => ({
        url: `trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
      }),
    }),
  }),
});

export const { useGetTrendingMoviesQuery } = requestTMDbAPI;
