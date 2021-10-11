import React, { useEffect, useCallback } from 'react';
import { ENDPOINTS } from '../config';
import * as locale from '../locale';
import SelectedFilter from '../components/SelectedFilter';
import ComponentHeader from '../components/ComponentHeader';
import ListingView from '../components/ListingView';
import fetchDataActionCreator from '../store/asynActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { ModelAPIResponseDataActions } from '../store/slices/model';
import { RootState } from '../store';
import type { ViewModelProps } from '../types'
import styles from './styles/View.module.css';


/**
 * create view for model 
 * @param selectedMake:if filter is already selected selected Filter component will be shown for make.
 * @param selectedModel:if filter is already selected selected Filter component will be shown for model.
 * @param onchangeFilter: to change selected Filter for model. 
 */

const ModelView = ({ selectedModel, onchangeFilter, selectedMake }: ViewModelProps) => {
  const dispatch = useDispatch();
  const modelDetails = useSelector((state: RootState) => state.modelDetails);


  const getModelData = useCallback(() => {
    dispatch(fetchDataActionCreator(`${ENDPOINTS.models.url}make=${selectedMake}`, ModelAPIResponseDataActions.getData));
  }, [dispatch, selectedMake]);


  useEffect(() => {
    if(!selectedModel){
      getModelData();
    }
  }, [selectedModel, getModelData]);

  
  return (
    <section className={styles.Filter}>
      {selectedModel ? (
        <SelectedFilter
          onchangeFilter={onchangeFilter}
          type={locale.typeModel}
          selectedVal={selectedModel}
          selectedPrev={selectedMake}
          placeholder={locale.modelPlaceholder}
        />
      ) : (
        <div className={styles.FilterList}>
          <ComponentHeader content={locale.noSelectModel} isMobile={true} isShow={true} />
          <ListingView
            onchangeFilter={onchangeFilter}
            placeholder={locale.modelPlaceholder}
            type={locale.typeModel}
            OnRetry={getModelData}
            height={400}
            itemSize={30}
            isVehicle={false}
            dataSet={modelDetails}
          />
        </div>
      )}
    </section>
  );
};
export default ModelView;
