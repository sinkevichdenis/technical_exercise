import { render } from '@testing-library/react-native';
import React from 'react';

import { mockHistogramData } from '__mocks__/histogram.mock';

import { Histogram } from '../Histogram';


describe('Histogram component', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(
      <Histogram
        data={ mockHistogramData }
        width={ 500 }
      />);
    expect(toJSON()).toMatchSnapshot();
  });
});
