import '@testing-library/jest-dom/extend-expect';
import App from './index';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Testing Header component', () => {
    it('render without crashing', () => {
        const defaultProps = {
            placeholder: 'Select',
            selectedVal: 'BMW',
            type: 'make',
            onchangeFilter: jest.fn(),
            selectedPrev: '',
        };
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <App {...defaultProps} />
            </Router>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('render on change', () => {
        const onchangeFilter = jest.fn();
        const defaultProps = {
            placeholder: 'Select',
            selectedVal: 'BMW',
            type: 'make',
            onchangeFilter: jest.fn(),
            selectedPrev: '',
        };
        const component = render(
            <Router>
                <App {...defaultProps} />
            </Router>
        );
        const input = component.getByLabelText('change-selected-filter');
        fireEvent.click(input);
        expect(onchangeFilter).toHaveBeenCalledTimes(0);
    });
    it('render on for only on make filter', () => {
        const defaultProps = {
            placeholder: 'Select',
            selectedVal: '',
            type: 'make',
            onchangeFilter: jest.fn(),
            selectedPrev: '',
        };
        const { container } = render(
            <Router>
                <App {...defaultProps} />
            </Router>
        );
        const header = container.querySelector('[data-testid="subheader"]');
        expect(header).not.toBeInTheDocument();
    });
    it('render on for only on model filter', () => {
        const defaultProps = {
            placeholder: 'Select',
            selectedVal: 'Car',
            type: 'make',
            onchangeFilter: jest.fn(),
            selectedPrev: '3r',
        };
        const { container } = render(
            <Router>
                <App {...defaultProps} />
            </Router>
        );
        const header = container.querySelector('[data-testid="subheader"]');
        expect(header).not.toBeInTheDocument();
    });
});
