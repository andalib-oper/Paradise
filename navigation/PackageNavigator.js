import React, {useLayoutEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Packages from '../src/mainTabs/PackageScreen/Packages';
import Details from '../src/mainTabs/PackageScreen/Details';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Stack = createStackNavigator();
const tabHiddenRoutes = ["details"];


const PackageNavigator = ({navigation, route}) => {
    useLayoutEffect(() => {
        // const routeName = getFocusedRouteNameFromRoute(route);
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
          navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
          navigation.setOptions({ tabBarStyle: { display: 'flex' } });
        }
      }, [navigation, route]);
    return (
        <Stack.Navigator initialRouteName='package'>
            <Stack.Screen name='package' component={Packages} 
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen name='details' component={Details} 
             options={{
              headerShown:false,
                headerTitle: 'Details',
              headerStyle: { backgroundColor: '#C2F1FF',},
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

export default PackageNavigator;