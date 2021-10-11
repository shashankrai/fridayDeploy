import '@testing-library/jest-dom/extend-expect';
import {render, screen } from '@testing-library/react';
import App from './index';

describe('Testing Header component', () => {
  it('Header is Loaded', () => {
    render(<App />);
    const linkElement = screen.getByText(/Find Vehicles/);
    expect(linkElement).toBeInTheDocument();
  });
});
