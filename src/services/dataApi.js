// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

// Define a service using a base URL and expected endpoints
export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getClasses: builder.query({
      query: () => `clases.json`,
    }),
    getCalendar: builder.query({
      query: () => `calendarData.json`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetClassesQuery, useGetCalendarQuery } = dataApi;
