import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#C2F1FF', '#F5F5F5']} style={styles.linearGradient}>
      <Text>Welcome</Text>
      </LinearGradient>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center'
  },
})