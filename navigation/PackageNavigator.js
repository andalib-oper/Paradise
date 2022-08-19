import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Packages from '../src/mainTabs/PackageScreen/Packages';



const Stack = createStackNavigator();

const PackageNavigator = () => {
    return (
        <Stack.Navigator headerMode='false' initialRouteName='package'>
            <Stack.Screen name='package' component={Packages} />
        </Stack.Navigator>
    );
};

export default PackageNavigator;