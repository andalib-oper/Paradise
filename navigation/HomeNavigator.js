import React,{useLayoutEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Home from '../src/mainTabs/HomeScreen/Home'
import Details from '../src/mainTabs/HomeScreen/Details';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Stack = createStackNavigator();
const tabHiddenRoutes = ["booknow"];


const HomeNavigator = ({navigation,route}) => {
    useLayoutEffect(() => {
        // const routeName = getFocusedRouteNameFromRoute(route);
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
          navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
          navigation.setOptions({ tabBarStyle: { display: 'flex' } });
        }
      }, [navigation, route]);
    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name='home' component={Home} 
            options={{
              headerTitle: 'Home',
              headerStyle: { backgroundColor: '#C2F1FF',},
              headerLeft: () => (
                <MaterialIcons
                  name="arrow-back"
                  color='black'
                  size={26}
                  style={{ marginLeft: 10, }}
                  onPress={() => navigation.goBack()} />
              ),
            }}/>
            <Stack.Screen name='details' component={Details} 
            options={{
              headerTitle: 'Book Now',
              headerStyle: { backgroundColor: '#C2F1FF',},
              headerLeft: () => (
                <MaterialIcons
                  name="arrow-back"
                  color='black'
                  size={26}
                  style={{ marginLeft: 10, }}
                  onPress={() => navigation.goBack()} />
              ),
            }}/>
        </Stack.Navigator>
    );
};

export default HomeNavigator;