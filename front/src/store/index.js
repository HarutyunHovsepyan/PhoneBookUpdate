import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./phoneSlice";


export default configureStore({
    reducer: {
        phones: phoneReducer
    }
}
)