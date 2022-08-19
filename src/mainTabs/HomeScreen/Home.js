import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import SearchBar from "react-native-dynamic-search-bar";

const horizontalMargin = 10;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 150;

const data = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg'
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg'
  },
]
const Home = () => {
  const onSubmit = () => {
    console.log("first")
  }
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Image
          style={styles.image}
          source={{ uri: (item.illustration) }} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View>
      <SearchBar
        style={styles.searchbar}
        placeholder="Search here"
        onPress={() => alert("onPress")}
        onChangeText={(val) => onSubmit(val)}
      />
      </View>
      <View>
      <Carousel
        // ref={(c) => {carousel = c; }}
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
      </View>
      <View>
        <Text style={styles.recomText}>Recommended</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slide: {
    marginTop: '10%',
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
    // backgroundColor: 'yellow'
  },
  image: {
    // marginTop: '10%',
    borderRadius: 20,
    width: slideWidth,
    flex: 1
    // other styles for the inner container
  },
  searchbar: {
    marginTop: 10,
    paddingHorizontal: 10
},
recomText: {
  textAlign: 'left',
  color: '#000',
  fontSize: 16,
  fontWeight: '600',
  margin: '10%'
}
})