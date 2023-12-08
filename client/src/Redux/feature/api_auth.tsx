import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const auth = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ominous-engine-97w95p9pxj2jww-3000.app.github.dev/auth/' }),
    endpoints: (builder) => ({
        login: builder.mutation<Pokemon, number>({
            query(body) {
                return {
                    url: `login`,
                    method: 'POST',
                    body,
                }
            }
        }),
        register: builder.mutation<Pokemon, number>({
            query(body) {
                return {
                    url: `register`,
                    method: 'POST',
                    body,
                }
            }
        }),
    }),
})


export const { useLoginMutation, useRegisterMutation } = auth