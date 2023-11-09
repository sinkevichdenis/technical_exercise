import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

import { Colors } from 'styles/colors';
import { DEFAULT_BORDER_RADIUS } from 'styles/consts';


type Props = {
  containerStyle?: StyleProp<ViewStyle>,
  verticalLabelRotation?: number,
  width: number,
  height?: number,
  data: any,
}

const chartConfig = {
  backgroundGradientFrom: Colors.LIGHT_BLUE,
  backgroundGradientTo: Colors.LIGHT_BLUE,
  fillShadowGradientFrom: Colors.BLUE,
  fillShadowGradientTo: Colors.BLUE,
  fillShadowGradientFromOpacity: 1,
  fillShadowGradientToOpacity: 1,
  decimalPlaces: 0,
  color: () => Colors.GRAY,
  labelColor: () => Colors.TEXT_BLACK,
  barPercentage: 0.4,
};

export const Histogram: React.FC<Props> = React.memo(({
  containerStyle,
  verticalLabelRotation = 60,
  width,
  height = 350,
  data,
}) => {
  return (
    <View style={ containerStyle }>
      <BarChart
        style={ styles.graph }
        data={ data }
        width={ width }
        height={ height }
        chartConfig={ chartConfig }
        verticalLabelRotation={ verticalLabelRotation }
        fromZero
        showValuesOnTopOfBars
        showBarTops={ false }
      />
    </View>
  );
});

const styles = StyleSheet.create({
  graph: {
    borderRadius: DEFAULT_BORDER_RADIUS,
  },
});
