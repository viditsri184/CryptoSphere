import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-key': '38cc845f06msh5a3e3043bfef1fdp1fa02djsnbf9378739bae',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url, params) => ({ url, headers: cryptoApiHeaders, params });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`, {referenceCurrencyUuid: 'yhjMzLPhuIDl'})
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        })
    })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi;