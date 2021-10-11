import React from "react";
import * as locale from '../../locale';
import styles from "./SelectedFilter.module.css";
import { Link } from "react-router-dom";
import type { selectedFilterProps } from '../../types'

/**
 * Show selected filters value and change options to it. 
 * @param type which filter is selected.
 * @param onChange updating the selected filter.
 * @param selectedPrev previous selected filter.
 * @returns component for SelectedFilter.
 */

const SelectedFilter = ({ selectedVal, type, onchangeFilter, selectedPrev }: selectedFilterProps) => {
  return (
    selectedVal ? (
      <>
        <header className={styles.SelectedHeader}>{`Selected Vehicle ${type}`}</header>
        <div className={styles.SelectedWrapper}>
          <h1 className={styles.SelectedOption}>{`${locale.selectedFilter} ${selectedVal}`} </h1>
          <Link
            onClick={() => onchangeFilter('', type)}
            to={selectedPrev ? `/${selectedPrev}` : `/`}
            className={styles.ChangeOption}
            aria-label="change-selected-filter"
            data-testid="changeFilter"
            area-role ="link"
          >
            <span> {locale.changeFilter} </span>
          </Link>
        </div>
      </>
    ) : null
  );
};
export default SelectedFilter;
