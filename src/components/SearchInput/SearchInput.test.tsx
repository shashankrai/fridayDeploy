import '@testing-library/jest-dom/extend-expect';
import App from './index';
import ReactDOM from "react-dom";
import { render, fireEvent } from '@testing-library/react';



describe('Testing Search Component', () => {

    it("render without crashing", () => {
        const defaultProps = {
            placeholder: 'Select',
            requests: jest.fn()
        }
        const div = document.createElement("div");
        ReactDOM.render(<App {...defaultProps} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('render on change', () => {
        const requests = jest.fn();
        const defaultProps = {
            placeholder: 'Select',
            requests: jest.fn()
        }
        const component = render(<App {...defaultProps} />);
        const input = component.getByLabelText('filter-input')
        fireEvent.change(input, { target: { value: "BMW" } });
        expect(requests).toHaveBeenCalledTimes(0);
    });

});
