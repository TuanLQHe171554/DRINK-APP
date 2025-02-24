import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from '../../navigation/BottomNavigation';

export const HomePage = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  )
}
