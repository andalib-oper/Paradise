import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
  const dispatch = useDispatch();
  const checkFirstLaunch = useCallback(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      navigation.navigate('login');
      // dispatch(req());
    });
  }, [navigation]);
  useEffect(() => {
    setTimeout(() => {
      checkFirstLaunch();
    }, 5000);
  }, [checkFirstLaunch]);
  console.log('App Executed');
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#C2F1FF', '#F5F5F5']} style={styles.linearGradient}>
      <Image
      style={styles.image}
      source={require('../../images/logo.png')}
      />
      <Text style={styles.text}>PARADISE</Text>
      </LinearGradient>
    </View>
  )
}

export default Splash

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center'
  },
  image:{
    alignSelf: 'center',
    borderRadius: 10,
    height: windowHeight/3,
    width: windowWidth/2
  },
  text: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: '#052544',
    fontStyle: 'italic'
  }
})