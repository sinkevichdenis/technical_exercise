import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const Home: React.FC = React.memo(() => {
  return (
    <SafeAreaView style={ styles.safeArea }>
      <Text> Test </Text>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
