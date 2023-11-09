import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { ErrorMessageArea } from '../ErrorMessageArea';


describe('ErrorMessageArea component', () => {
  const mockedOnPress = jest.fn();
  const text = 'error text';

  const componentRender = () => render(
    <ErrorMessageArea
      onPress={ mockedOnPress }
      text={ text }
    />
  );

  it('should match snapshot', () => {
    const { toJSON } = componentRender();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should handle press on button', () => {
    const { getByTestId } = componentRender();
    fireEvent.press(getByTestId('error-area-btn'));
    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('should show error text', () => {
    const { getByText } = componentRender();
    expect(getByText(text)).toBeTruthy();
  });
});
