import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../src/rootTabs/Splash'
import Login from '../src/rootTabs/Login'
import ResetPassword from '../src/rootTabs/ResetPassword';
import UpdatePassword from '../src/rootTabs/UpdatePassword';
import Register from '../src/rootTabs/Register'
import CreatePassword from '../src/rootTabs/CreatePassword';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode='false' initialRouteName='splash'>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="resetpassword" component={ResetPassword} />
      <Stack.Screen name="updatepassword" component={UpdatePassword} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="createpassword" component={CreatePassword} />
    </Stack.Navigator>
  );
};

export default RootNavigator;