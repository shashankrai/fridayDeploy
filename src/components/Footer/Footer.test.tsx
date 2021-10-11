import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Testing Footer component', () => {
  it('Footer is  Loaded', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/2021/);
    expect(linkElement).toBeInTheDocument();
  });
});
