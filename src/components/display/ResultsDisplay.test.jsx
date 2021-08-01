import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from '../display/ResultsDisplay'

describe('Results Display Component', () => {
  afterEach(() => cleanup());
  it.only('should render Display', () => {
    const { asFragment } = render(<Display />);
    expect(asFragment()).toMatchSnapshot();
  });
});
