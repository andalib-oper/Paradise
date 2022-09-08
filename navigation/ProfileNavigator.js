import React,{useLayoutEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../src/mainTabs/ProfileScreen.js/profile';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EditProfile from '../src/mainTabs/ProfileScreen.js/EditProfile';

const Stack = createStackNavigator();

const tabHiddenRoutes = ["details", "editprofile"];

const ProfileNavigator = ({navigation, route}) => {
    useLayoutEffect(() => {
        // const routeName = getFocusedRouteNameFromRoute(route);
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
          navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
          navigation.setOptions({ tabBarStyle: { display: 'flex' } });
        }
      }, [navigation, route]);
    return (
        <Stack.Navigator  initialRouteName='profile'>
            <Stack.Screen name='profile' component={Profile} 
             options={{
                headerShown: true,
                headerStyle: { backgroundColor: '#C2F1FF',},
                headerTitle: 'Profile',
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
            <Stack.Screen name='editprofile' component={EditProfile} 
             options={{
                headerShown: false,
                headerStyle: { backgroundColor: '#C2F1FF',},
                headerTitle: 'Edit Profile',
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

export default ProfileNavigator;