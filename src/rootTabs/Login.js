import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import LoginScreen, { SocialButton } from "react-native-login-screen";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>login</Text>
      <LoginScreen
        // logoImageSource={require("./assets/logo-example.png")}
        onLoginPress={() => { }}
        onSignupPress={() => { }}
        onEmailChange={(email) => { }}
        onPasswordChange={(password) => { }}
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerBackground: {
    backgroundColor: 'white',
    width: windowWidth / 1,
    flex: 1,
  },
  titleImage: {
    // backgroundColor: '#000',
    height: windowHeight / 9,
    paddingVertical: 20,
    margin: '5%',
    // marginLeft: '10%',
    // marginRight: '10%',
    width: windowWidth / 3,
    alignSelf: 'center'
  },
})