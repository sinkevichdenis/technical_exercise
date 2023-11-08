import React from 'react';
import {
  StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle
} from 'react-native';

import { Colors } from 'styles/colors';
import { DEFAULT_BORDER_RADIUS, DEFAULT_MARGIN } from 'styles/consts';


type Props = {
  onPress: () => void,
  text: string,
  containerStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  testID?: string,
}

export const Button: React.FC<Props> = React.memo(({
  onPress,
  text,
  containerStyle,
  textStyle,
  testID = 'button',
}) => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      testID={ testID }
      style={ [styles.container, containerStyle] }
    >
      <Text style={ [styles.text, textStyle] }>{ text }</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.TEXT_BLACK,
    borderRadius: DEFAULT_BORDER_RADIUS,
    borderWidth: 1,
    paddingHorizontal: DEFAULT_MARGIN,
    paddingVertical: DEFAULT_MARGIN / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.WHITE,
    fontSize: 16,
    lineHeight: 20,
  },
});
