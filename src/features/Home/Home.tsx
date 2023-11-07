import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '../../styles/colors';


export const Home: React.FC = React.memo(() => {
  return (
    <SafeAreaView style={ styles.safeArea }>
      <Text style={ styles.text }> Test </Text>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  text: {
    color: Colors.TEXT_BLACK,
  },
});
