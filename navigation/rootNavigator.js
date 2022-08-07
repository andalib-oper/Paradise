import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../src/rootTabs/Splash'
import Login from '../src/rootTabs/Login'

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode='false' initialRouteName='splash'>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default RootNavigator;