import React from 'react';
import { render,screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../MakeView';
jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation((key) => key);

describe('Testing Make component', () => {
    it('render on for only on make', () => {
        const defaultProps ={
            selectedMake:'',
            onchangeFilter: jest.fn(), 
        }  
        render(<Provider store={store}><Router><App {...defaultProps} /></Router></Provider>);
        const linkElement = screen.getByText( /Please select a car Make and Model/i );
        expect(linkElement).toBeInTheDocument();
    }); 

    it('filter selected for make', () => {
        const defaultProps ={
            selectedMake:'BMW',
            onchangeFilter: jest.fn(), 
        }        
        render(<Provider store={store}><Router><App {...defaultProps} /></Router></Provider>);
        const linkElement = screen.getByText(/Selected : BMW/);
        expect(linkElement).toBeInTheDocument();
    });
    
    
   
  });
