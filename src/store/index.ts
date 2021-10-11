
   
import { configureStore } from '@reduxjs/toolkit';
import MakeAPIResponseDataSlice from './slices/make';
import ModelAPIResponseDataSlice from './slices/model';
import VehicleAPIResponseDataSlice from './slices/vehicle';
/**
 * store for application.
 */

const store = configureStore({
    reducer:{
        makeDetails: MakeAPIResponseDataSlice.reducer,
        modelDetails: ModelAPIResponseDataSlice.reducer,
        vehicleDetails: VehicleAPIResponseDataSlice.reducer,
    }
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;