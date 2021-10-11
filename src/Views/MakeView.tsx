import React, { useEffect, useCallback } from 'react';
import { ENDPOINTS } from '../config';
import * as locale from '../locale';
import SelectedFilter from '../components/SelectedFilter';
import ComponentHeader from '../components/ComponentHeader';
import ListingView from '../components/ListingView';
import fetchDataActionCreator from '../store/asynActionCreator';
import { MakeAPIResponseDataActions } from '../store/slices/make';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import styles from './styles/View.module.css';
import type { MakeProps } from '../types'

/**
 * Create view for Make 
 * @param selectedMake:if filter is already selected filters component will be shown.
 * @param onchangeFilter: to change selected filter. 
*/

const MakeView = ({ selectedMake, onchangeFilter }: MakeProps) => {
  const dispatch = useDispatch();
  const makeDetails = useSelector((state: RootState) => state.makeDetails);


  const getMakeData = useCallback(() => {
    dispatch(fetchDataActionCreator(ENDPOINTS.makes.url + new URLSearchParams({}), MakeAPIResponseDataActions.getData));
  }, [dispatch]);


  useEffect(() => {
    if(!selectedMake){
    getMakeData();
    };
  }, [dispatch, getMakeData,selectedMake]);

  
  return (
    <section className={styles.Filter}>
      {selectedMake ? (
        <SelectedFilter
          onchangeFilter={onchangeFilter}
          type={locale.typeMake}
          selectedVal={selectedMake}
          placeholder={locale.makePlaceHolder}
        />
      ) : (
        <div className={styles.FilterList}>
          <ComponentHeader content={locale.noSelectMake} isMobile={true} isShow={true} />
          <ListingView
            onchangeFilter={onchangeFilter}
            placeholder={locale.makePlaceHolder}
            type={locale.typeMake}
            OnRetry={getMakeData}
            height={400}
            itemSize={30}
            isVehicle={false}
            dataSet={makeDetails}
          />
        </div>
      )}
    </section>
  );
};
export default MakeView;
