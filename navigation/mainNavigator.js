import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';
import PackageNavigator from './PackageNavigator';
import BookingsNavigator from './BookingsNavigator'
import ProfileNavigator from './ProfileNavigator';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const mainNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      // tabBarStyle: {
      //   backgroundColor: 'white'
      // },
      tabBarHideOnKeyboard: true,
      headerShown: false
    }}
    initialRouteName="home">
      <Tab.Screen name="homeNavigator" component={HomeNavigator}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
        }}
        />
         <Tab.Screen name="packagesNavigator" component={PackageNavigator} 
         options={{
          tabBarLabel: 'Packages',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="package-variant-closed" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="bookingsNavigator" component={BookingsNavigator} 
       options={{
        tabBarLabel: 'Bookings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="order-bool-descending-variant" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen name="profileNavigator" component={ProfileNavigator} 
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    /> 
    </Tab.Navigator>
  );
};

export default mainNavigator;