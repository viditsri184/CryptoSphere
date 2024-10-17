import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://cryptocurrency-news2.p.rapidapi.com/v1/',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '38cc845f06msh5a3e3043bfef1fdp1fa02djsnbf9378739bae');
            headers.set('x-rapidapi-host', 'cryptocurrency-news2.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => 'cryptodaily', // Endpoint to fetch daily cryptocurrency news
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;