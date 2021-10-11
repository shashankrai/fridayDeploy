import React from 'react';
import { render,fireEvent,screen} from '@testing-library/react';
import { Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../index';
import { createMemoryHistory } from "history";
jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation((key) => key);


describe('Testing Base Components', () => {
    it('Make components is present or not', () => {
        const history = createMemoryHistory()
        const { container } = render(<Provider store={store}><Router history={history}><App /></Router></Provider>);
        const header= container.querySelector('[data-testid="mainContainer"]');
        expect(header).toBeInTheDocument();
    }); 

    it('Make component header loaded', () => {
        const history = createMemoryHistory()
        render(<Provider store={store}><Router history ={history}><App /></Router></Provider>);
        const linkElement = screen.getByText(/Please select a car Make and Model/);
        expect(linkElement).toBeInTheDocument();
    });
   
    it('on change filter btn clicked and screen changes', () => {
        global.window = Object.create(window);
        const defineUrl = (url:string) => {
          Object.defineProperty(window, 'location', {
            value: {
              pathname: url,
            },
            writable: true,
          });
        };
        defineUrl("http://localhost:3000/BMW");
        const history = createMemoryHistory()
        history.push(`http://localhost:3000/BMW`)      
        render(<Provider store={store}><Router history={history}><App /></Router></Provider>);
        const linkElement = screen.getByTestId('changeFilter');
        expect(linkElement).toBeInTheDocument();
        fireEvent.click(linkElement);
        const newText = screen.getByText(/Select : Make/);
        expect(newText).toBeInTheDocument();    
    });
  });
