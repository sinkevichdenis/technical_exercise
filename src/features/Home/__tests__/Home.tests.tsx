import { render } from '@testing-library/react-native';
import React from 'react';


import { mockOctokitFilteredResponse } from '__mocks__/octokit.mock';
import { useGetMergedPullRequests } from 'hooks/useGetMergedPullRequests';

import { Home } from '../Home';


const mockInitialState = { data: [], error: null, loading: false };
const mockSuccessState = { data: mockOctokitFilteredResponse, error: null, loading: false };
const mockLoadingState = { data: mockOctokitFilteredResponse, error: null, loading: true };
const mockErrorState = { data: [], error: { message: 'error' }, loading: false };

const errorId = 'error-message-area';
const buttonId = 'update-btn';
const loaderId = 'spinner';


jest.mock('hooks/useGetMergedPullRequests');

describe('Home component', () => {
  const componentRender = () => render(<Home />);

  it('handle initial state without data', () => {
    (useGetMergedPullRequests as jest.Mock).mockReturnValue(mockInitialState);
    const { toJSON, queryByTestId } = componentRender();
    expect(toJSON()).toMatchSnapshot();
    expect(queryByTestId(errorId)).toBeNull();
    expect(queryByTestId(buttonId)).toBeNull();
    expect(queryByTestId(loaderId)).toBeNull();
  });

  it('handle successful state with data', () => {
    (useGetMergedPullRequests as jest.Mock).mockReturnValue(mockSuccessState);
    const { toJSON, queryByTestId } = componentRender();
    expect(toJSON()).toMatchSnapshot();
    expect(queryByTestId(errorId)).toBeNull();
    expect(queryByTestId(buttonId)).toBeTruthy();
    expect(queryByTestId(loaderId)).toBeNull();
  });

  it('handle loading state', () => {
    (useGetMergedPullRequests as jest.Mock).mockReturnValue(mockLoadingState);
    const { queryByTestId } = componentRender();
    expect(queryByTestId('home-content')).toBeNull();
    expect(queryByTestId(loaderId)).toBeTruthy();
  });

  it('handle error state', () => {
    (useGetMergedPullRequests as jest.Mock).mockReturnValue(mockErrorState);
    const { toJSON, queryByTestId } = componentRender();
    expect(toJSON()).toMatchSnapshot();
    expect(queryByTestId(errorId)).toBeTruthy();
    expect(queryByTestId(buttonId)).toBeNull();
    expect(queryByTestId(loaderId)).toBeNull();
  });
});
