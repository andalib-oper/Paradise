import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../src/mainTabs/ProfileScreen.js/profile';


const Stack = createStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator headerMode='false' initialRouteName='profile'>
            <Stack.Screen name='profile' component={Profile} />
        </Stack.Navigator>
    );
};

export default ProfileNavigator;