import React from 'react';
import {
  ActivityIndicator,
  StyleProp, View, ViewStyle
} from 'react-native';

import { Colors } from 'styles/colors';


type Props = {
  containerStyle?: StyleProp<ViewStyle>,
}

export const LoadingSpinner: React.FC<Props> = React.memo(({
  containerStyle,
}) => (
  <View
    style={ containerStyle }
    testID='spinner'
  >
    <ActivityIndicator
      size="large"
      color={ Colors.BLUE }
    />
  </View>
));
