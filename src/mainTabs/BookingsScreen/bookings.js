import { ScrollView, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StackHeader from '../../../components/StackHeader';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useSelector } from 'react-redux';

const data = [
  {
    img: 'https://i.imgur.com/UPrs1EWl.jpg',
    title: 'Kashmir',
    des: 'Famous for Gulmarg, drinagar, and many more, visit and enjoy alot.',
    pack: '4000'
  },
  {
    img: 'https://i.imgur.com/UPrs1EWl.jpg',
    title: 'Kashmir',
    des: 'Famous for Gulmarg, drinagar, and many more, visit and enjoy alot.',
    pack: '4000'
  },
  {
    img: 'https://i.imgur.com/UPrs1EWl.jpg',
    title: 'Kashmir',
    des: 'Famous for Gulmarg, drinagar, and many more, visit and enjoy alot.',
    pack: '4000'
  },
  {
    img: 'https://i.imgur.com/UPrs1EWl.jpg',
    title: 'Kashmir',
    des: 'Famous for Gulmarg, drinagar, and many more, visit and enjoy alot.',
    pack: '4000'
  }
]
const Bookings = ({navigation}) => {
  const [res, setRes] = useState("")
  const authState = useSelector((state)=>state.authState)
  const url = `https://paradis-be-iam.herokuapp.com/api`;
  useEffect(() => {
    axios.get(`${url}/booking/user/${authState.id}`)
    .then((response) => {
      setRes(response.data);
    });
  }, []);
  console.log('booking', res, authState.id);
  const formatDate = (date) => {
    const arr = date.split("-")
    const formatStr = `${arr[2]}-${arr[1]}-${arr[0]}`
    return formatStr
  }
  return (
    <View>
      <ScrollView>
      <StackHeader
       headerName="Bookings"
       name="arrow-left"
       size={24}
       color="black"
       headerNavigation={() => navigation.goBack()}
      //  filterName="filter"
      //  filterSize={28}
      //  filterColor="black"
      //  filterNavigation={() => filter()}
     />
        {/* <LinearGradient colors={['#C2F1FF', '#F5F5F5']}> */}
          {res && res?.map((item)=>{
            return(
          <View style={styles.card}>
            <View style={styles.cardInner}>
              <Image
                style={styles.tinyLogo}
                // source={{uri: (item.)}}
                // source={require('../../../images/logo.png')}
              />
              <View style={{
                // backgroundColor: 'orange',
                width: '55%'
                }}>
                <Text style={styles.innerText}>{item.transportaionName}</Text>
                <Text style={styles.package}>{item.transportaionAddress}</Text>
                {/* <Text style={styles.package}>{formatDate(item.tourStartDate)}</Text> */}
                <Text style={styles.package}>{moment(item.tourStartDate).format('DD-MM-YYYY')}{'\b'}to{moment(item.tourEndDate).format('DD-MM-YYYY')}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
            )
          })}
        {/* </LinearGradient> */}
      </ScrollView>
    </View>
  )
}

export default Bookings

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  card: {
    backgroundColor: '#fff',
    height: windowHeight / 4,
    margin: '2%',
    width: windowWidth / 1.1,
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 10,
  },
  tinyLogo: {
    // marginTop: '5%',
    // backgroundColor: 'pink',
    marginLeft: '2%',
    width: '40%',
    height: '100%',
  },
  cardInner: {
    marginTop: '5%',
    flexDirection: 'row',
    height: '70%',
    // backgroundColor: 'red'
  },
  innerText: {
    // backgroundColor: 'blue',
    width: '80%',
    marginLeft: '5%',
    fontSize: 18,
    color: '#000',
    fontWeight: '600'
  },
  package: {
    // backgroundColor: 'blue',
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '2%',
    fontSize: 14,
    color: '#000',
    fontWeight: '400'
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: '15%',
    width: '40%',
    padding: 5,
    backgroundColor: '#63B2FB',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center'
  }
})