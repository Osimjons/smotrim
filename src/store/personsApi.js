import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API } from '../constants/constants';

export const personsApi = createApi({
  reducerPath: 'personApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
  }),
  endpoints: (build) => ({
    getPersons: build.query({
      query: () => 'boxes/vesti2',
    }),
    getPersonInfo: build.query({
      query: (personId) => `persons/${personId}`,
    }),
  }),
});

export const { useGetPersonsQuery, useGetPersonInfoQuery } = personsApi;
