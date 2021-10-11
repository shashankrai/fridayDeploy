import React from "react";
import * as locale from '../../locale';
import styles from "./ListingView.module.css";
import car from "../../images/car.svg";
import type { VehicleViewProps } from '../../types'

/**
 * Show view for select vehicles . 
 * @param index which item to show.
 * @param data all data set.
 * @param style form react.window package.
 * it used inside react-window as Row 
 * @returns view for Vehicles.
 * it use localstorage to save data and  update in ui for saved on scroll.
 */

const VehicleView = ({ index, data, style }: VehicleViewProps) => {

  const { make, model, bodyType, fuelType, enginePowerPS, enginePowerKW, engineCapacity } = data[index];
  const key = `${make}${model}${bodyType}${fuelType}${enginePowerPS}${enginePowerKW}${engineCapacity}`;
 
 /**
  * 
  * @param data  to check if item is in localstorage or not.
  * @returns true or false. 
  */

  const isSavedAsFav = (data: object) => {
    const addedCar = JSON.parse(localStorage.getItem(locale.fridayCarFav) || '[]');
    const index = addedCar.findIndex((e: any) => e.stockNumber === key);
    return index !== -1 ? false : true;
  };


/**
  * 
  * @param data object to save in localstorage.
  * @returns  saved data in localstorage. 
*/

  const saveToFavorite = (data: object) => {
    const addedCar = JSON.parse(localStorage.getItem(locale.fridayCarFav) || '[]');
    const index = addedCar.findIndex((e: any) => e.stockNumber === key);
    if (index === -1) {
      const localeData = { ...data, 'stockNumber': key }
      addedCar.push(localeData);
      window.scrollBy(0, 10);
      localStorage.setItem(locale.fridayCarFav, JSON.stringify(addedCar));
      alert("Added to your favorite list, Please see favorite section");
    } else {
      alert("This Car is already added to favorite list");
    }
  };

  const isfav = isSavedAsFav(data[index]);


  return (
    <div style={style}>
      <div className={styles.CarContainer} >
        <div className={styles.carView}>
          <img src={car} alt={"logo"} width="200" height="150" />
        </div>
        <div className={styles.carDescription} >
          <p className={styles.carsubDescriptionBold}>
            <span>{`${make} / ${model}`} </span>
          </p>
          <p className={styles.carsubDescriptionlight}>
            <span>{bodyType}</span>
            <span className={styles.subDescription}>{locale.body}</span>
            <span>{fuelType} </span>
            <span className={styles.subDescription}>{locale.fuel}</span>
          </p>
          <p className={styles.carsubDescriptionBold}>
            <span> {locale.power}</span>
          </p>
          <p className={styles.carsubDescriptionlight}>
            <span>{enginePowerPS}<span>{locale.ps} </span>/</span>
            <span>{enginePowerKW}<span>{locale.kw}</span>/ </span>
            <span>{engineCapacity}<span>{locale.capcity}</span></span>
          </p>
        </div>
        <div className={styles.carFav}>
          {isfav 
          ? <button className ={styles.favButton } onClick ={()=> saveToFavorite(data[index])}  aria-label="change-view" area-role ="link">{locale.savefav} </button> 
          : locale.fav }
       </div>
      </div>
      
    </div>
  )
}
export default VehicleView;
