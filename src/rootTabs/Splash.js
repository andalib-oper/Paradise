import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
  const dispatch = useDispatch();
  // const checkFirstLaunch = useCallback(() => {
  //   AsyncStorage.getItem('alreadyLaunched').then(value => {
  //     navigation.navigate('login');
  //     // dispatch(req());
  //   });
  // }, [navigation]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     checkFirstLaunch();
  //   }, 5000);
  // }, [checkFirstLaunch]);
  console.log('App Executed');
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
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
  containerBackground: {
    backgroundColor: 'white',
    width: windowWidth / 1,
    flex: 1,
  },
  titleImage: {
    // backgroundColor: '#000',
    height: windowHeight / 8,
    paddingVertical: 20,
    margin: '75%',
    // marginLeft: '10%',
    // marginRight: '10%',
    width: windowWidth / 2,
    alignSelf: 'center'
  },
})