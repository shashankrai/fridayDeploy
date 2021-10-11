import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import store from '../../store';
import App from '../ModalView';

describe('Testing Model component', () => {
  it('Model filter options showing', () => {
    const defaultProps = {
      selectedMake: 'BMW',
      onchangeFilter: jest.fn(),
      selectedModel: '',
    };
    const history = createMemoryHistory();
    history.push(`/${defaultProps.selectedMake}`);
    render(
      <Provider store={store}>
        <Router history={history}>
          <App {...defaultProps} />
        </Router>
      </Provider>
    );
    const linkElement = screen.getByText(/Select : Model/);
    expect(linkElement).toBeInTheDocument();
  });
  it('Model filter is Selected', () => {
    const defaultProps = {
      selectedMake: 'BMW',
      onchangeFilter: jest.fn(),
      selectedModel: '3er',
    };
    const history = createMemoryHistory();
    history.push(`/${defaultProps.selectedMake}`);
    render(
      <Provider store={store}>
        <Router history={history}>
          <App {...defaultProps} />
        </Router>
      </Provider>
    );
    const linkElement = screen.getByText(/Selected : 3er/);
    expect(linkElement).toBeInTheDocument();
  });
});
