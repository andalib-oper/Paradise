import React, {useLayoutEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bookings from '../src/mainTabs/BookingsScreen/bookings';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Stack = createStackNavigator();

const tabHiddenRoutes = ["details"];

const BookingsNavigator = ({navigation, route}) => {
    useLayoutEffect(() => {
        // const routeName = getFocusedRouteNameFromRoute(route);
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
          navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
          navigation.setOptions({ tabBarStyle: { display: 'flex' } });
        }
      }, [navigation, route]);
    return (
        <Stack.Navigator initialRouteName='bookings'>
            <Stack.Screen name='booking' component={Bookings} 
            options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#C2F1FF',},
                headerTitle: 'Bookings',
                headerLeft: () => (
                    <MaterialIcons
                      name="arrow-back"
                      color='black'
                      size={26}
                      style={{ marginLeft: 10, }}
                      onPress={() => navigation.goBack()} />
                  ),
            }}
            />
        </Stack.Navigator>
    );
};

export default BookingsNavigator;