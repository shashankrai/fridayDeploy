import { typeVehicle } from "../locale";

/**
 * Debounce method for optimization of search
 * @param searchText search value.
 * special character is  not allowed in search.
 * @returns only sting value with single in btween space if any.
 */

const escapeSplChars = (searchText: string) => {
  return searchText.replace(/[^\w\s]/gi, '');
};

/**
 * Debounce method for optimization of search
 * @param item to filter
 * @param trimText text to be search.
 * @param type vehicle or make or model.
 * @returns filtered data.
 */

const filterData = (item: any, trimText: string, type: string) => {
  const data = type !== typeVehicle ?
    item.data.filter((word: any) => word.toLowerCase().includes(trimText.toLowerCase())) :
    item.data.filter((data: any) => 
        Object.values(data).find((value: any) => 
           value.toString().toLowerCase().includes(trimText.toLowerCase())
        ));
  return data;
};

/**
 * 
 * @param paths current url 
 * @returns  array of path variable.
 */
const cleanUrlpath =(paths:string) => {
  const path = paths.split('/');
  return path;
}



export { filterData, escapeSplChars,cleanUrlpath }