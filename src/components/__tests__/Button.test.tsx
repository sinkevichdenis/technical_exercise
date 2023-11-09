import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Button } from '../Button';


describe('BackButton component', () => {
  const mockedOnPress = jest.fn();
  const buttonText = 'test button';

  const componentRender = () => render(
    <Button
      onPress={ mockedOnPress }
      text={ buttonText }
    />
  );

  it('should match snapshot', () => {
    const { toJSON } = componentRender();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should handle press', () => {
    const { getByTestId } = componentRender();
    fireEvent.press(getByTestId('button'));
    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('should show text', () => {
    const { getByText } = componentRender();
    expect(getByText(buttonText)).toBeTruthy();
  });
});
