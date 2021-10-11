/** Types used across application */

export type AnyObject = { [key: string]: any };

export interface ComponentHeaderProps  {
    content: string;
    isMobile: boolean;
    isShow: boolean;
  };

export interface FilterViewProps {
    data: Array<string>,
    index:number,
    style:object,
    make:any,
    OnSelect: (param:string, type: string) => void,
    type:string,
  }

export interface ListingViewProps {
    onchangeFilter: (param: string, type: string) => void;
    placeholder: string;
    type: string;
    OnRetry: () => void;
    isVehicle: boolean;
    height: number;
    dataSet: { data: any; status: string };
    itemSize: number;
  };

interface Vehicle
{
  make: number, 
  model: string,
  bodyType: number,
  fuelType: string,
  enginePowerPS:number,
  engineCapacity:number,
  enginePowerKW:number
}
export interface VehicleViewProps {
  data: Vehicle[],
  index:number,
  style:object,
}

export interface searchInputProps  {
    placeholder: string,
    requests: (type: string) => void;
};

export interface selectedFilterProps {
    selectedVal: string,
    type: string,
    placeholder: string,
    onchangeFilter: (param: string, type: string) => void,
    selectedPrev?: string,
};
  
export interface ViewMakeProps {
    selectedMake: string,
    onchangeFilter: (value: string , type: string) => void
};

export interface ViewModelProps {
    selectedMake: string,
    selectedModel: string,
    onchangeFilter: (value: string , type: string) => void;
  };

export interface  ViewVehiclesProps {
    selectedMake: string,
    selectedModel: string,
    onchangeFilter: (value: string , type: string) => void;
};

export interface RowProps {
    index: number,
    style: object,
};

export interface FavProps { [key: string]: any };
export interface FavCarsProps {
  make: number, 
  model: string,
  bodyType: number,
  fuelType: string,
  enginePowerPS:number,
  engineCapacity:number,
  enginePowerKW:number
  stockNumber:string
 }
 export interface MakeProps  {
    selectedMake: string ,
    onchangeFilter: (value: string , type: string) => void
  };
  

  