import React from 'react';
import { render, screen } from '@testing-library/react';
import AppContainer from './AppContainer';

describe('<AppContainer />', () => {
  it('checks that AppContainer renders', async () => {
    const { getByText } = render(<AppContainer />);
    const appContainer = getByText('AppContainer');
    expect(appContainer).toBeInTheDocument();
  });
});





