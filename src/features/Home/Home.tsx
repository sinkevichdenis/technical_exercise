import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from 'components/Button';
import { ErrorMessageArea } from 'components/ErrorMessageArea';
import { useGetMergedPullRequests } from 'hooks/useGetMergedPullRequests';
import { Colors } from 'styles/colors';
import { DEFAULT_MARGIN } from 'styles/consts';


export const Home: React.FC = React.memo(() => {
  const { data, loading, error, refetch } = useGetMergedPullRequests();
  return (
    <SafeAreaView style={ styles.safeArea }>
      <ScrollView
        style={ styles.container }
        bounces={ false }
      >
        <Text style={ styles.text }>
          { JSON.stringify(loading) }
        </Text>
        <Text style={ styles.text }>
          { data?.length }
        </Text>
        { error && (
          <ErrorMessageArea
            text={ `${error.status}:\n${error.message}` }
            onPress={ refetch }
          />
        ) }
        { !error && !!data.length && (
          <Button
            onPress={ refetch }
            text='Update'
            containerStyle={ styles.button }
            testID='update-btn'
          />
        ) }
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    padding: DEFAULT_MARGIN,
  },
  text: {
    color: Colors.TEXT_BLACK,
  },
  button: {
    marginTop: DEFAULT_MARGIN,
  },
});
