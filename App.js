import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store/index';

import List from './src/Screens/list';
import Form from './src/Screens/form';

const Stack = createStackNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Simple Note" component={List} />
          <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
