import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigation from './src/screens/BottomNavigation';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={BottomNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    //   </PersistGate>
    // </Provider>


  );
}
