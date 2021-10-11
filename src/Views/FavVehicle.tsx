import React, { useState, useEffect ,useCallback } from 'react';
import caImage from "../images/car.svg";
import * as locale from "../locale";
import styles from "./styles/fav.module.css";
import type { FavProps,FavCarsProps } from '../types'



const FavVehicle = ()=> {
    const [cars, setCars] = useState<FavProps>([]);
    const {noSave,fridayCarFav} =locale;

   /**
    * to  get data from local storage.
    */
    const getFavCar = useCallback(() =>{
        const allFaveCar = JSON.parse(localStorage.getItem(fridayCarFav) || '[]');
        setCars(allFaveCar);
    
    },[fridayCarFav]);

    /**
     * 
     * @param stockNumber  unique value to identify item.
     */

    const favCarToDelte =(stockNumber:string) =>{
        const allFaveCar = JSON.parse(localStorage.getItem(fridayCarFav) || '[]');
        allFaveCar.splice(allFaveCar.findIndex((item: any) => item.stockNumber === stockNumber),1);
        setCars(allFaveCar);
        localStorage.setItem(fridayCarFav, JSON.stringify(allFaveCar));

    };

    useEffect(() => {
        getFavCar();
    },[getFavCar]);

    return (
        <div className ={styles.favContainer}>
            {cars.length 
            ?     
                <>
                    {cars.map((car:FavCarsProps,index:number) => ( 
                        <div key={index} className={styles.carItem}>
                        <div className={styles.carImgContainer}>
                                 <img src={caImage} alt={'car'} className ={styles.carImage}></img>
                        </div>
                        <div className ={styles.carDescContainer}>
                             <p className={styles.carName}>{car?.make}</p>
                             <p className={styles.carDesc}>{`${car?.model}-${car?.fuelType}`}</p>
                             <p className={styles.carDesc}>{`${car?.fuelType} - ${car?.enginePowerPS} - ${car?.engineCapacity}`}</p>
                        </div>
                        <div className ={styles.carBtnContainer}>
                             <button onClick ={()=>favCarToDelte(car?.stockNumber)} data-testid="delete">{locale.deletebtn}</button>
                        </div>
                        </div>
                    ))} 
                </> 
            :   <div>
                     <h4 className={styles.nosave}>{noSave} <a href="/">{locale.homePage}</a></h4>
                 </div>} 
        </div>
    )
}
export default FavVehicle;