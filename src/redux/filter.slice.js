import { createSlice } from "@reduxjs/toolkit";
import { filterInitState } from "./filter.init-state";

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitState,
    reducers: {
        filterAction(state, { payload }) {
            state.value = payload

        }
    }
})

export const { filterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
