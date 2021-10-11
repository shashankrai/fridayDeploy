import '@testing-library/jest-dom/extend-expect';
import App from './index';
import React from 'react';
import ReactDOM from "react-dom";
import { render,fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from "react-router-dom";



describe('Testing Listing component', () => {

    it("render without crashing for success Api response", () => {
        const defaultProps ={
            placeholder: 'Select',
            selectedVal:'BMW',
            type:'make',
            onchangeFilter:jest.fn(),
            OnRetry: jest.fn(),
            isVehicle:true,
            height:100,
            dataSet: {data:['bmw', 'limosine'], status:'sucess'},
            itemSize:20,
        }
        const div = document.createElement("div");
        ReactDOM.render(<Router><App {...defaultProps} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("render without crashing for error Api response", () => {
        const defaultProps ={
            placeholder: 'Select',
            selectedVal:'BMW',
            type:'make',
            onchangeFilter:jest.fn(),
            OnRetry: jest.fn(),
            isVehicle:true,
            height:100,
            dataSet: {data:['bmw', 'limosine'], status:'error'},
            itemSize:20,
        }
        const div = document.createElement("div");
        ReactDOM.render(<Router><App {...defaultProps} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("render without crashing for pending Api response", () => {
        const defaultProps ={
            placeholder: 'Select',
            selectedVal:'BMW',
            type:'make',
            onchangeFilter:jest.fn(),
            OnRetry: jest.fn(),
            isVehicle:true,
            height:100,
            dataSet: {data:['bmw', 'limosine'], status:'pending'},
            itemSize:20,
        }
        const div = document.createElement("div");
        ReactDOM.render(<Router><App {...defaultProps} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("renders without on for make and model with data", () => {
        const defaultProps ={
            placeholder: 'Select',
            selectedVal:'BMW',
            type:'make',
            onchangeFilter:jest.fn(),
            OnRetry: jest.fn(),
            isVehicle:false,
            height:100,
            dataSet: {data:['bmw', 'limosine'], status:'pending'},
            itemSize:20,
        }
        const div = document.createElement("div");
        ReactDOM.render(<Router><App {...defaultProps} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('render on change filter click for make', () => {
        const onClick =jest.fn();
        const defaultProps ={
            placeholder: 'Select',
            selectedVal:'BMW',
            type:'make',
            onchangeFilter:jest.fn(),
            OnRetry: jest.fn(),
            isVehicle:false,
            height:100,
            dataSet: {data:['bmw'], status:'success'},
            itemSize:20,
        }
        const component = render(<Router><App {...defaultProps} /></Router>);
        const input = component.getByLabelText('change-view')
        fireEvent.click (input);
        expect(onClick).toHaveBeenCalledTimes(0);    
    });   
    it('render when api with no data', () => {
        const defaultProps ={
            placeholder: 'Select',
            selectedVal:'BMW',
            type:'make',
            onchangeFilter:jest.fn(),
            OnRetry: jest.fn(),
            isVehicle:false,
            height:100,
            dataSet: {data:[], status:'success'},
            itemSize:20,
        }
        const { container } = render(<Router><App {...defaultProps} /></Router>);
        const header= container.querySelector('[data-testid="changeView"]');
        expect(header).not.toBeInTheDocument();
    
    });   
    it('render on change filters', () => {
        const defaultProps ={
            placeholder: 'Select',
            selectedVal:'BMW',
            type:'make',
            onchangeFilter:jest.fn(),
            OnRetry: jest.fn(),
            isVehicle:false,
            height:100,
            dataSet: {data:['car1','car2'], status:'success'},
            itemSize:20,
        }
         const { container } = render(<Router><App {...defaultProps} /></Router>);
         const header= container.querySelector('[data-testid="changeView"]');
         expect(header).toBeInTheDocument();
    
    });  
    it('render on suceess api response with vehicles data', () => {
        const defaultProps ={
            placeholder: 'Select',
            selectedVal:'BMW',
            type:'make',
            onchangeFilter:jest.fn(),
            OnRetry: jest.fn(),
            isVehicle:true,
            height:100,
            dataSet: {data:[{make:'make',model:'model'},{make:'make',model:'model'}], status:'success'},
            itemSize:20,
        }
        const { container } = render(<Router><App {...defaultProps} /></Router>);
        const header= container.querySelector('[data-testid="changeView"]');
        expect(header).not.toBeInTheDocument();
    
    });   
    it('render on change with make filters', () => {
        const defaultProps ={
            placeholder: 'Select',
            selectedVal:'BMW',
            type:'make',
            onchangeFilter:jest.fn(),
            OnRetry: jest.fn(),
            isVehicle:false,
            height:100,
            dataSet: {data:['car1','car2'], status:'success'},
            itemSize:20,
        }
        const { container } = render(<Router><Route path="/:make" ><App {...defaultProps} /></Route></Router>);
        const header= container.querySelector('[data-testid="changeView"]');
        expect(header).toBeInTheDocument();
    
    });   
   
});
