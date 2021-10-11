import { useState, useEffect } from 'react';
/**
 * Debounce method for optimization of search
 * @param value which value to search.
 * @param delay after how much delay it show retun the search term.
 * @param useEffect for updating the useState value.
 * useEffect has been cleaned
 * @returns view for Filters.
 */

const useDebounce =(value:string, delay:number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  // Effect for search input
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

       // Cancel the timeout to clean the asyn useEffect.
       // Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only call effect if debounced search term changes
  );
  return debouncedValue;
}
export default useDebounce;