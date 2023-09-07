import { configureStore } from "@reduxjs/toolkit";
import { PuppyBowlApi } from "./reducers/PuppyBowlApi";
import { setupListeners } from "@reduxjs/toolkit/query";



const store = configureStore({
    reducer: {
        [PuppyBowlApi.reducer]: PuppyBowlApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PuppyBowlApi.middleware)
})

console.log(store)
setupListeners(store.dispatch);

export default store;