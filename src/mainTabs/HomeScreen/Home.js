import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import SearchBar from 'react-native-dynamic-search-bar';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';

const horizontalMargin = 10;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 150;

const data = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
];
const place = [
  {
    name: 'Kashnmir',
    tripDays: '10',
    image: 'https://i.imgur.com/UPrs1EWl.jpg',
    price: '6000',
    offer: '35%',
  },
  {
    name: 'Kashnmir',
    tripDays: '10',
    image: 'https://i.imgur.com/UPrs1EWl.jpg',
    price: '6000',
    offer: '35%',
  },
  {
    name: 'Kashnmir',
    tripDays: '10',
    image: 'https://i.imgur.com/UPrs1EWl.jpg',
    price: '6000',
    offer: '35%',
  },
  {
    name: 'Kashnmir',
    tripDays: '10',
    image: 'https://i.imgur.com/UPrs1EWl.jpg',
    price: '6000',
    offer: '35%',
  },
];
const Home = ({navigation}) => {
  const onSubmit = () => {
    console.log('first');
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Image style={styles.image} source={{uri: item.illustration}} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={['#C2F1FF', '#F5F5F5']}
          style={styles.linearGradient}>
          <View>
            <SearchBar
              style={styles.searchbar}
              placeholder="Search here"
              onPress={() => alert('onPress')}
              onChangeText={val => onSubmit(val)}
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
          {place.map(item => {
            return (
              <View>
                <View style={styles.recomView}>
                  <Text
                    style={{
                      textAlign: 'left',
                      color: '#000',
                      fontSize: 16,
                      fontWeight: '600',
                      marginTop: '5%',
                      marginLeft: '8%',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'grey',
                      marginTop: '2%',
                      marginLeft: '8%',
                    }}>
                    {item.tripDays}{'\b'}Days Trips
                  </Text>
                  <Image
                    style={{
                      margin: '5%',
                      alignSelf: 'center',
                      borderRadius: 10,
                      width: windowWidth / 1.4,
                      height: windowHeight / 5,
                    }}
                    source={{
                      uri: (item.image)
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: '5%',
                    }}>
                    <View
                      style={{
                        width: '40%',
                        // backgroundColor: 'red',
                        marginLeft: '8%',
                      }}>
                      <Text
                        style={{
                          textAlign: 'left',
                          fontSize: 14,
                          color: 'grey',
                          marginTop: '2%',
                          //  marginLeft: '8%',
                        }}>
                        Rs. {item.price} {'\b \b'}
                        <Text
                          style={{
                            fontSize: 14,
                            color: 'green',
                            marginTop: '2%',
                            marginLeft: '8%',
                          }}>
                          {item.offer} off
                        </Text>
                      </Text>
                    </View>
                    <View style={{marginLeft: '20%'}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('details')}
                        style={styles.bookNow}>
                        <Text style={{color: '#fff'}}>View Details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Home;

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
    flex: 1,
    // other styles for the inner container
  },
  searchbar: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  recomText: {
    textAlign: 'left',
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    margin: '10%',
  },
  recomView: {
    marginBottom: '5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignSelf: 'center',
    width: windowWidth / 1.2,
    height: 'auto',
  },
  bookNow: {
    backgroundColor: '#63B2FB',
    width: 'auto',
    height: 'auto',
    padding: 5,
    borderRadius: 10,
  },
});
