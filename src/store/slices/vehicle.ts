import { createSlice } from "@reduxjs/toolkit";
import  { API_FETCH_PENDING } from '../constants'

/**
 * slice for vehicle.
 */

const VehicleAPIResponseDataSlice = createSlice({
    name: 'vehicleAPIResponse',
    initialState: { status:API_FETCH_PENDING, data :[] },
    reducers: {
        getData(state, action) {
            return action.payload
        }
    }
});

export const VehicleAPIResponseDataActions = VehicleAPIResponseDataSlice.actions;
export default VehicleAPIResponseDataSlice;