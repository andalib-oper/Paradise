import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

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

const ProductButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C2F1FF', '#F5F5F5']}
        style={styles.linearGradient}>
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
                  {item.tripDays}
                  {'\b'}Days Trips
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
                    uri: item.image,
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
        <View style={{marginBottom: '10%'}}></View>
      </LinearGradient>
    </View>
  );
};

export default ProductButton;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  //   linearGradient: {
  //     width: windowWidth / 1,
  //     // height: 300,
  //   },
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
