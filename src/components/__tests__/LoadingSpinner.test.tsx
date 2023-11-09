import { render } from '@testing-library/react-native';
import React from 'react';

import { LoadingSpinner } from '../LoadingSpinner';


describe('LoadingSpinner component', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<LoadingSpinner />);
    expect(toJSON()).toMatchSnapshot();
  });
});
