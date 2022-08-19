import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bookings from '../src/mainTabs/BookingsScreen/bookings';



const Stack = createStackNavigator();

const BookingsNavigator = () => {
    return (
        <Stack.Navigator headerMode='false' initialRouteName='bookings'>
            <Stack.Screen name='booking' component={Bookings} />
        </Stack.Navigator>
    );
};

export default BookingsNavigator;