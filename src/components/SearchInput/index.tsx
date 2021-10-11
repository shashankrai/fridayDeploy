import React, { useState, useEffect } from 'react';
import styles from './SearchInput.module.css';
import useDebounce from '../../helpers/customhook';
import  {escapeSplChars} from '../../helpers/utils'
import type { searchInputProps } from '../../types'

/**
 * Search input component fliters 
 * @param requests callback function to update input value.
 * @param placeholrd for showing placeholder in input box.
 * using debounce logic for serach optimization.
 * @returns component for Search
 */

const SearchInput = ({ requests, placeholder }: searchInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedSearchTerm = useDebounce(inputValue, 500);

  useEffect(() => {
    requests(debouncedSearchTerm);
  }, [requests, debouncedSearchTerm]);


  const updateValue = (value:string) =>{
      value = value.replace(/\s+/g, " ");
      setInputValue(value);
      escapeSplChars(value);
  }


  return (
    <section className={styles.SearchWrapper}>
      <input
        className={styles.SearchBox}
        value={inputValue}
        onChange={(input) => updateValue(input.target.value)}
        placeholder={placeholder}
        aria-label="filter-input"
        
      />
    </section>
  );
};
export default SearchInput;
