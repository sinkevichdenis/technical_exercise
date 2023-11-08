import React from 'react';
import {
  StyleProp, StyleSheet, Text, View, ViewStyle
} from 'react-native';

import { Colors } from 'styles/colors';
import { DEFAULT_BORDER_RADIUS, DEFAULT_MARGIN } from 'styles/consts';

import { Button } from './Button';


type Props = {
  text: string,
  containerStyle?: StyleProp<ViewStyle>,
  testID?: string,
  onPress: () => void,
}

export const ErrorMessageArea: React.FC<Props> = React.memo(({
  text,
  containerStyle,
  testID = 'error-message-area',
  onPress,
}) => {
  return (
    <View
      style={ [styles.container, containerStyle] }
      testID={ testID }
    >
      <Text style={ styles.text }>{ text }</Text>
      <Button
        onPress={ onPress }
        text='Try again'
        containerStyle={ styles.button }
        testID='error-area-btn'
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: DEFAULT_MARGIN,
    borderRadius: DEFAULT_BORDER_RADIUS,
    borderWidth: 1,
    borderColor: Colors.RED,
  },
  text: {
    color: Colors.RED,
    fontSize: 16,
    lineHeight: 20,
  },
  button: {
    marginTop: DEFAULT_MARGIN,
  },
});
