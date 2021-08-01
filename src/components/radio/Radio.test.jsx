import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Radio from '../radio/Radio';

describe('Radio Component', () => {
  afterEach(() => cleanup());
  it.only('should render Radio', () => {
    const { asFragment } = render(<Radio />);
    expect(asFragment()).toMatchSnapshot();
  });
});
