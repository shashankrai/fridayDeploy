import { createSlice } from "@reduxjs/toolkit";
import  { API_FETCH_PENDING } from '../constants'

/**
 * slice for make.
 */

const MakeAPIResponseDataSlice = createSlice({
    name: 'makeAPIResponse',
    initialState: { status:API_FETCH_PENDING, data :[] },
    reducers: {
        getData(state, action) {
            return action.payload
        }
    }
});

export const MakeAPIResponseDataActions = MakeAPIResponseDataSlice.actions;
export default MakeAPIResponseDataSlice;