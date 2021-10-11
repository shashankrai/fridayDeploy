import React from "react";
import styles from "./ListingView.module.css";
import { Link } from "react-router-dom";
import type { FilterViewProps } from '../../types'


/**
 * Show view for select vehicles . 
 * @param index which item to show.
 * @param data all data set.
 * @param style form react.window package.
 * @param make to check which type it is rendering make or model.
 * it used inside react-window  as Row 
 * @returns view for Filters.
 */


const FilterView = ({index,data,style,make,OnSelect,type}:FilterViewProps) => {
    return (
        <div
          className={index % 2 ? styles.ListItemOdd : styles.ListItemEven}
          style={style}
        >
          <Link
            onClick={() => OnSelect(data[index], type)}
            to={ make? `/${make}/${data[index]}`: `/${data[index]}`
            } data-testid="changeView"  aria-label="change-view" area-role ="link"
          >
            {data[index]}
          </Link>
        </div>
    )
}
export default FilterView;
