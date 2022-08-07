import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../src/mainTabs/HomeScreen/Home';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const mainNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      // tabBarStyle: {
      //   backgroundColor: 'white'
      // },
      headerShown: false
    }}
    initialRouteName="home">
      <Tab.Screen name="home" component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
        }}
        />
        {/* <Tab.Screen name="services" component={ServiceNavigator} 
         options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-repair-service" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="bookings" component={BookingsNavigator} 
       options={{
        tabBarLabel: 'Bookings',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="order-bool-descending-variant" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen name="profile" component={ProfileNavigator} 
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    /> */}
    </Tab.Navigator>
  );
};

export default mainNavigator;