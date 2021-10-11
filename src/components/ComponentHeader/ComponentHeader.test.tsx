import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from './index';

describe('Testing Header component', () => {
  it('Sub Header is Loaded for mobile', () => {
    const defaultProps = {
      content: 'Select',
      isMobile: true,
      isShow: true,
    };
    render(<App {...defaultProps}></App>);
    const linkElement = screen.getByText('Select');
    expect(linkElement).toBeInTheDocument();
  });

  it('Sub header not Loaded for mobile', () => {
    const defaultProps = {
      content: 'Select',
      isMobile: false,
      isShow: true,
    };
    render(<App {...defaultProps}></App>);
    const linkElement = screen.getByText('Select');
    expect(linkElement).toBeInTheDocument();
  });

  it('Sub header not showing for desktop', () => {
    const defaultProps = {
      content: 'Select',
      isMobile: false,
      isShow: false,
    };
    const { container } = render(<App {...defaultProps} />);
    const header = container.querySelector('[data-testid="subheader"]');
    expect(header).not.toBeInTheDocument();
  });
});
