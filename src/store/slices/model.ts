import { createSlice } from "@reduxjs/toolkit";
import  { API_FETCH_PENDING } from '../constants'

/**
 * slice for model.
 */


const ModelAPIResponseDataSlice = createSlice({
    name: 'modelAPIResponse',
    initialState: { status:API_FETCH_PENDING, data :[] },
    reducers: {
        getData(state, action) {
            return action.payload
        }
    }
});

export const ModelAPIResponseDataActions = ModelAPIResponseDataSlice.actions;
export default ModelAPIResponseDataSlice;