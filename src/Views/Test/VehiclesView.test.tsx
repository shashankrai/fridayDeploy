import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../VehicelsView';
import { createMemoryHistory } from 'history';

describe('Testing Vehicles component', () => {
  it('render on for only on make', () => {
    const defaultProps = {
      selectedMake: 'BMW',
      onchangeFilter: jest.fn(),
      selectedModel: '3er',
    };
    const history = createMemoryHistory();
    history.push(`/${defaultProps.selectedMake}/${defaultProps.selectedModel}`);
    render(
      <Provider store={store}>
        <Router history={history}>
          <App {...defaultProps} />
        </Router>
      </Provider>
    );
    const linkElement = screen.getByText(/Select : Vehicle/i);
    expect(linkElement).toBeInTheDocument();
  });
});
