import React, { useEffect, useCallback } from 'react';
import { ENDPOINTS } from '../config';
import * as locale from '../locale';
import ComponentHeader from '../components/ComponentHeader';
import ListingView from '../components/ListingView';
import fetchDataActionCreator from '../store/asynActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { VehicleAPIResponseDataActions } from '../store/slices/vehicle';
import { RootState } from '../store';
import type { ViewVehiclesProps } from '../types'
import styles from './styles/View.module.css';



/**
 * create view for vehicles.
 * @param selectedMake:if filter is already selected selected Filter component will be shown for make.
 * @param selectedModel:if filter is already selected selected Filter component will be shown for model.
 * @param onchangeFilter: to change selected filter for vehicle for future any new feature implementations.
 */

const VehiclesView = ({ selectedModel, selectedMake, onchangeFilter }: ViewVehiclesProps) => {
  const dispatch = useDispatch();
  const vehicleDetails = useSelector((state: RootState) => state.vehicleDetails);

  const getVehicleData = useCallback(() => {
    dispatch(
      fetchDataActionCreator(
        `${ENDPOINTS.vehicles.url}make=${selectedMake}&model=${selectedModel}`,
        VehicleAPIResponseDataActions.getData
      )
    );
  }, [dispatch, selectedMake, selectedModel]);

  useEffect(() => {
    if (selectedModel) {
      getVehicleData();
    }
  }, [dispatch, getVehicleData, selectedModel]);

  return (
    <>
      <ComponentHeader content={locale.noSelectVehicles} isMobile={false} isShow={!selectedModel || !selectedMake} />
      <section className={styles.Filter}>
        <ListingView
          OnRetry={getVehicleData}
          type={locale.typeVehicle}
          height={620}
          itemSize={200}
          placeholder={locale.vehicalPlaceHolder}
          isVehicle={true}
          dataSet={vehicleDetails}
          onchangeFilter={onchangeFilter}
        />
      </section>
    </>
  );
};
export default VehiclesView;
