import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from '../navigation/rootNavigator'
import MainNavigator from '../navigation/mainNavigator'
import {tokenRetriever} from '../redux/auth/action';

const config = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(tokenRetriever());
  // }, [dispatch]);

  const authState = useSelector(state => state.authState);
  return (
    <NavigationContainer>
      {authState.isLoggedIn ? <MainNavigator/> : <RootNavigator />}
    </NavigationContainer>
  );
};

export default config;