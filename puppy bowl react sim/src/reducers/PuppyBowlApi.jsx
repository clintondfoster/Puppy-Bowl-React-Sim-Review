import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


//Use base URL and expected endpoints 
export const PuppyBowlApi = createApi({
    reducerPath: "PuppyBowlApi",
    baseQuery: fetchBaseQuery({baseurl: 'https://fsa-puppy-bowl.herokuapp.com/api/2307-fsa-et-web-ft-sf'}),
    endpoints: (builder) => ({
        getPlayerByName: builder.query({
            query: (name) => `players/${name}`,
        }),
        getPlayers: builder.query({
            query:() => 'players',
        }),
    }),
})
console.log(PuppyBowlApi)

export const {useGetPlayerByNameQuery, useGetPlayersQuery } = PuppyBowlApi