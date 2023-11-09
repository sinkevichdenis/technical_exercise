import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from 'components/Button';
import { ErrorMessageArea } from 'components/ErrorMessageArea';
import { useGetMergedPullRequests } from 'hooks/useGetMergedPullRequests';
import { Colors } from 'styles/colors';
import { DEFAULT_MARGIN } from 'styles/consts';

import { LoadingSpinner } from '../../components/LoadingSpinner';


export const Home: React.FC = React.memo(() => {
  const { data, loading, error, refetch } = useGetMergedPullRequests();
  return (
    <SafeAreaView style={ styles.safeArea }>
      <ScrollView
        style={ styles.container }
        bounces={ false }
      >
        { loading ? <LoadingSpinner containerStyle={ styles.marginTop }/> : (
          <View
            style={ styles.contentWrapper }
            testID='home-content'
          >
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
                containerStyle={ styles.marginTop }
                testID='update-btn'
              />
            ) }
          </View>
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
  contentWrapper: {
    marginTop: DEFAULT_MARGIN * 3,
  },
  text: {
    color: Colors.TEXT_BLACK,
  },
  marginTop: {
    marginTop: DEFAULT_MARGIN,
  },
});
