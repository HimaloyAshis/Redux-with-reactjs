import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/CounterSlice";
import logger from "./middleWare/Logger";

const store = configureStore({
    reducer: {
        counter : counterReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

export default store;