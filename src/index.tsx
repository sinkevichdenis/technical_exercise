import React, { StrictMode } from 'react';
import 'react-native-devsettings';
import {
  StatusBar,
  StyleSheet
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home } from './features/Home/Home';
import { Colors } from './styles/colors';


const AppContent:React.FC = () => (
  <>
    <StatusBar
      barStyle="dark-content"
      backgroundColor={ Colors.TRANSPARENT }
    />
    <Home />
  </>
);
export const App:React.FC = () => {
  return (
    <GestureHandlerRootView style={ styles.container }>
      <StrictMode>
        <SafeAreaProvider>
          <AppContent />
        </SafeAreaProvider>
      </StrictMode>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
