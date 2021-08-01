/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppContainer from '../containers/AppContainer';
import { MemoryRouter } from 'react-router-dom';

describe('AppContainer)', () => {
  it('should render AppContainer', async () => {
    render(<MemoryRouter><AppContainer /></MemoryRouter>);

    const urlPlaceHolder = screen.getByPlaceholderText('URL');
    userEvent.type(urlPlaceHolder);
    fireEvent.change(urlPlaceHolder, { target: { value: 'https://damp-cove-34137.herokuapp.com/api/quotes/5' } });
    expect(urlPlaceHolder).toHaveDisplayValue('https://damp-cove-34137.herokuapp.com/api/quotes/5');

    const radioValue = screen.getByLabelText('GET');
    userEvent.click(radioValue);
    fireEvent.change(radioValue, { target: { value: 'GET' } });
    expect(radioValue).toBeChecked('GET');

    const submitButton = screen.getByRole('button');
    const display = screen.getByTestId('display');
    userEvent.click(submitButton);
    expect(display).not.toBeEmptyDOMElement();

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
