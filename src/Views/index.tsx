import React, { useState } from "react";
import { Route } from "react-router-dom";
import FavVehicle from './FavVehicle';
import MakeView from "./MakeView";
import ModelView from "./ModalView";
import VehiclesView from "./VehicelsView";
import ComponentHeader from "../components/ComponentHeader";
import { cleanUrlpath } from "../helpers/utils";
import styles from "./styles/View.module.css";
import * as locale from "../locale";




/**
 * create view for applicaton based on route and selection fo filters.
 * if route is '/' make view is shown.
 * if route is '/:make' model and make both view is shown
 * if route is '/:make/:model' vehicle,make and model  all view is shown.
 * to check already selected view url is read and based on params views are shown.
 */

const AppView = () => {
  const paths = cleanUrlpath(window.location.pathname);
  let make = paths[1];
  let model = paths[2];
  let fav = make ==='favorite' ? true : false; 

  const [selectedMake, setSelectedMake] = useState<string>(make);
  const [selectedModel, setSelectedModel] = useState<string>(model);


  /** Handle records per page change by user */
  const onchangeFilter = (value: string, type: string) => {
    if (type === locale.typeMake) {
      setSelectedMake(value);
      setSelectedModel("");
    } else {
      setSelectedModel(value);
    }
  };

  return (
    <main className={styles.MainWrapper} data-testid="mainContainer">
      {!fav ? 
      <>
      <section className={styles.FilterWrapper}>
      <Route path="/" >
          <MakeView
            selectedMake={selectedMake}
            onchangeFilter={onchangeFilter}
          />
        </Route>
        <Route path="/:make" >
          <ModelView
            selectedMake={selectedMake}
            selectedModel={selectedModel}
            onchangeFilter={onchangeFilter}
          />
        </Route>
      </section>
      <section className={styles.CarWrapper}>
        <ComponentHeader
          content={locale.noSelectVehicles}
          isMobile={false}
          isShow={!selectedModel || !selectedMake}
        />
        <Route path="/:make/:modal">
          <VehiclesView
            selectedMake={selectedMake}
            selectedModel={selectedModel}
            onchangeFilter={onchangeFilter}
          />
        </Route>
      </section>
      </> :
      <Route path="/favorite">
         <FavVehicle/>
       </Route>
    }
    </main>
  );
};

export default AppView;
