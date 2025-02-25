import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomePage/HomeScreen';
import { FoodScreen } from '../screens/HomePage/DrinkScreen';
import { KitchenScreen } from '../screens/HomePage/Drinks';
import { CartScreen } from '../screens/HomePage/CartScreen';
import { ProfileScreen } from './HomePage/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff', height: 70 },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: '#F36C24',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={FoodScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food-fork-drink" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Barista"
        component={KitchenScreen}
        options={{
          tabBarLabel: 'Barista',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="soup-kitchen" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Giỏ Hàng',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Hồ Sơ',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
