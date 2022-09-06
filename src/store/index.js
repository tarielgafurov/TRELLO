import cartSlice from "./slice/todoSlice";
import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slice/uiSlice";

const store = configureStore({
    reducer: {
        todo: cartSlice.reducer,
        ui: uiSlice.reducer
    }
})
export default store