import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import SearchInput from "../SearchInput";
import styles from "./ListingView.module.css";
import * as locale from "../../locale";
import {filterData} from "../../helpers/utils";
import {
  API_FETCH_SUCCESS,
  API_FETCH_ERROR,
  API_FETCH_PENDING,
} from "../../store/constants";
import FilterView from './FilterView'
import CarView from './VehicleView';
import type { ListingViewProps,RowProps} from '../../types'

/**
 * Show List views based on types given. 
 * @param onchangeFilter to select the filters.
 * @param type type of data (make,model, vehicle)
 * @param OnRetry  for api faliure call api again on click
 * @param itemSize count of dataset.
 * @param height of container to show content.
 * @param dataSet data to show
 * it uses react-window package to optimize rendering 
 * @returns View for Selected data set (make model and vehicle).
 */

const ListingView = ({
  onchangeFilter,
  placeholder,
  type,
  OnRetry,
  isVehicle,
  itemSize,
  height,
  dataSet,
}: ListingViewProps) => {
  let { make } = useParams<{ make?: string }>();
  let { status, data } = dataSet;
  let dataTorender = data;
  const [serchFilter, setSearchFilter] = useState("");

 

  const Row = ({ index, style }: RowProps) => {
    return (
    <>
      {!isVehicle ? (
      <FilterView 
        index={index} 
        data= {dataTorender}
        style={style} make ={make}  
        type={type} 
        OnSelect ={onchangeFilter} ></FilterView>
      ) : (
        <CarView index={index}  data= {dataTorender} style={style}   />
      )}
    </>
  )};
  dataTorender = serchFilter
    ? filterData(dataSet, serchFilter, type)
    : dataTorender;



  return (
    <>
      <header className={styles.ListHeader} >{`${locale.select} ${type}`}</header>
      {status === API_FETCH_PENDING && (
        <div className={styles.Loading}>{`${locale.loading}`}</div>
      )}
      {status === API_FETCH_ERROR && (
        <div className={styles.Retry} ><button onClick={() => OnRetry()}>{`${locale.retry}`}</button> </div>
      )}
      {status === API_FETCH_SUCCESS && (
        <div className={styles.ListWrapperComp}>
          <div className={styles.SuggestContainer}>
            {(dataTorender?.length !== 0 || serchFilter) && (
              <div className ={styles.records}>
                <SearchInput requests={setSearchFilter} placeholder={placeholder}/>
                <span className ={styles.count}>{`${type} ${locale.founded} ${dataTorender?.length}`}</span>
              </div>
            )}
            {dataTorender?.length === 0 
            ? ( <span className={styles.NoRecords}>{`${locale.noRecords}`}</span> ) 
            : (
                <List className={styles.List} height={height} itemCount={dataTorender.length} itemSize={itemSize}  width={"100%"}> 
                  {Row}
                </List>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ListingView;
