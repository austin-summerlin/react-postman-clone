import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Form from '../form/Form';

describe('Form Component', () => {
  afterEach(() => cleanup());
  it.only('should render Form', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });
});
