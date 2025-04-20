import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer"; // Assure-toi que "reducer" est bien structuré

const store = configureStore({
    reducer: rootReducers, 
});

export default store;