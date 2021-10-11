
import  { API_FETCH_SUCCESS, API_FETCH_ERROR } from '../constants'
import { AppDispatch } from '../../store';



/**
 * Async action creator to fetch data and change state of App
 * from pending->success | failed
 * @param urls - urls to be
 * @param action -action to be.
 */
 export type APIUrl = [string, string];
const fetchDataActionCreator = (url:string, action:any) => {
    return async (dispatch:AppDispatch) => {

        const fetchData = async () => {
           try {
               const response = await fetch(url);
               const data = await response.json();
               return data;
             }
           catch (e) {
              throw e;
           }

        } 
        try {
          const data = await fetchData();
           dispatch(action({status:API_FETCH_SUCCESS, data}))
        } catch (e) {
           dispatch(action({status:API_FETCH_ERROR, data:[] }))
        }
 
    };
}

export default fetchDataActionCreator;