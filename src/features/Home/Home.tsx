import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useGetMergedPullRequests } from '../../hooks/useGetMergedPullRequests';
import { Colors } from '../../styles/colors';


export const Home: React.FC = React.memo(() => {
  const { data, loading, error } = useGetMergedPullRequests();
  return (
    <SafeAreaView style={ styles.safeArea }>
      <ScrollView>
        <Text style={ styles.text }> Test </Text>
        <Text style={ styles.text }>
          { JSON.stringify(error) }
        </Text>
        <Text style={ styles.text }>
          { JSON.stringify(loading) }
        </Text>
        <Text style={ styles.text }>
          { JSON.stringify(data?.length || '') }
        </Text>
      </ScrollView>
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
