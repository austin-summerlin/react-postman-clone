/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryDisplay from '../history/HistoryDisplay';

describe('History Display Component', () => {
  const history = [{ 'url': '', 'method': 'PUT', 'body': '', 'key': '+PUT' }, { 'url': '', 'method': 'GET', 'body': 'stuff', 'key': '+GET' }];
  const onClick = jest.fn();
  afterEach(() => cleanup());
  it.only('should render History Display', () => {
    const { asFragment } = render(<HistoryDisplay history={history} onClick={onClick} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
