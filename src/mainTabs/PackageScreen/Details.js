import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
    Pressable,
    Modal,
    TouchableOpacity,
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
  import {Rating, AirbnbRating} from 'react-native-ratings';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import CalendarPicker from 'react-native-calendar-picker';
  import RazorpayCheckout from 'react-native-razorpay';
  import StackHeader from '../../../components/StackHeader'
  import moment from 'moment';
  import axios from 'axios';
  import React from 'react';
  import {useState, useEffect} from 'react';
  
  const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
  const carouselItem = [
    {
      title: 'Item 1',
      text: 'Text 1',
      Image:
        'https://cdn.pixabay.com/photo/2017/03/26/19/37/landscape-2176348__480.jpg',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
      Image:
        'https://media.istockphoto.com/photos/boat-in-dal-lake-picture-id1155225100?k=20&m=1155225100&s=612x612&w=0&h=w8_kXSPWbD7iWCjAOEss5De90-TwlTVlsrg17jiyvD8=',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
      Image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeh2YjGFQR1K44TGCsfi3Ca08AA1Ssysk3C-Kdpb33n5cCOS0u6K_viHRJKR5MBdn3xc&usqp=CAU',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
      Image:
        'https://t3.ftcdn.net/jpg/00/85/97/56/360_F_85975647_vA8t40LHYq6G2JKNoXrafYPqaMFT4HSp.jpg',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
      Image:
        'https://media.istockphoto.com/photos/beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india-picture-id1323846766?b=1&k=20&m=1323846766&s=170667a&w=0&h=ax37KHHN6VL7ESLPhlDkva26WZdDu8DFSHLIuEDTNY8=',
    },
  ];
  const BookNow = ({navigation, route}) => {
    const {packageId} = route.params
    const [res, setRes] = useState()
    const [starCount, setStarCount] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(
      moment().format('YYYY-MM-DD'),
    );
    const [selectedEndDate, setSelectedEndDate] = useState(
      moment().format('YYYY-MM-DD'),
    );
    const maxDate = moment(selectedStartDate).format('YYYY/MM/DD');
    const minDate = moment(selectedEndDate).format('YYYY/MM/DD');
    const onDateChange = (date, type) => {
      if (type === 'END_DATE') {
        setSelectedEndDate(date);
      } else {
        setSelectedStartDate(date), setSelectedEndDate(null);
      }
    };
    const modelClose = () => {
      setModalVisible(!modalVisible);
    };
    const onSubmit = () => {
      // dispatch(getAllStore(authState.id, maxDate,minDate));
      // dispatch(getAllDistributor(authState.id,maxDate,minDate));
      modelClose();
    };
    const WATER_IMAGE = require('../../../images/star.png');
  
    const ratingCompleted = rating => {
      console.log('Rating is: ' + rating);
    };
    const scrollInterpolator = (index, carouselProps) => {
      const range = [3, 2, 1, 0, -1];
      const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
      const outputRange = range;
  
      return {inputRange, outputRange};
    };
  
    const animatedStyles = (index, animatedValue, carouselProps) => {
      const sizeRef = carouselProps.vertical
        ? carouselProps.itemHeight
        : carouselProps.itemWidth;
      const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
  
      return {
        zIndex: carouselProps.data.length - index,
        opacity: animatedValue.interpolate({
          inputRange: [2, 3],
          outputRange: [1, 0],
        }),
        transform: [
          {
            rotate: animatedValue.interpolate({
              inputRange: [-1, 0, 1, 2, 3],
              outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
              extrapolate: 'clamp',
            }),
          },
          {
            [translateProp]: animatedValue.interpolate({
              inputRange: [-1, 0, 1, 2, 3],
              outputRange: [
                -sizeRef * 0.5,
                0,
                -sizeRef, // centered
                -sizeRef * 2, // centered
                -sizeRef * 3, // centered
              ],
              extrapolate: 'clamp',
            }),
          },
        ],
      };
    };
  
    const renderItem = ({item, index}, parallaxProps) => {
      return (
        <View
          style={{
            // backgroundColor: 'floralwhite',
            borderRadius: 8,
            height: windowHeight / 5,
            padding: 5,
            marginTop: '10%',
          }}>
          <Image
            source={{uri: item.Image}}
            style={{
              width: windowWidth / 1.4,
              borderRadius: 10,
              alignSelf: 'center',
              height: windowHeight / 5,
            }}
          />
        </View>
      );
    };
  
    function wp(percentage) {
      const value = (percentage * viewportWidth) / 100;
      return Math.round(value);
    }
    const slideHeight = viewportHeight * 0.36;
    const slideWidth = wp(95);
    const itemHorizontalMargin = wp(2);
  
    const sliderWidth = viewportWidth;
    const itemWidth = slideWidth + itemHorizontalMargin * 2;
  
    const onStarRatingPress = rating => {
      setStarCount({startCount: rating});
    };
  
    const [payment, setPayment] = useState()
    const url = `https://paradis-be-iam.herokuapp.com/api`;
    useEffect(() => {
      axios.get(`${url}/package/${packageId}`)
      .then((response) => {
        setRes(response.data);
      });
    }, []);
    console.log('197', res);
    return (
      <View>
        <ScrollView>
          {/* <Text>{packageId}</Text> */}
        <StackHeader
       headerName="Details"
       name="arrow-left"
       size={24}
       color="black"
       headerNavigation={() => navigation.goBack()}
      //  filterName="filter"
      //  filterSize={28}
      //  filterColor="black"
      //  filterNavigation={() => filter()}
     />
          <LinearGradient colors={['#C2F1FF', '#F5F5F5']}>
            <View style={styles.map}>
              <Carousel
                // other props
                data={carouselItem}
                renderItem={renderItem}
                layout={'tinder'}
                loop={true}
                loopClonesPerSide={2}
                autoplay={true}
                // sliderHeight={windowHeight/2}
                autoplayDelay={500}
                autoplayInterval={3000}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                scrollInterpolator={scrollInterpolator}
                slideInterpolatedStyle={animatedStyles}
                useScrollView={true}
              />
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'left',
                  color: '#000',
                  fontSize: 20,
                  fontWeight: '600',
                  marginTop: '5%',
                  marginLeft: '10%',
                }}>
                {res?.state}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'left',
                  color: 'grey',
                  fontSize: 14,
                  fontWeight: '400',
                  marginTop: '1%',
                  marginLeft: '10%',
                }}>
                {res?.inclusion}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: '10%',
                // backgroundColor: 'pink'
              }}>
              <View>
                <Rating
                  type="custom"
                  ratingImage={WATER_IMAGE}
                  // ratingColor="#3498db"
                  // ratingBackgroundColor="#c8c7c8"
                  // startingValue={ratingCount/2}
                  // showRating={}
                  ratingCount={5}
                  imageSize={20}
                  onFinishRating={ratingCompleted}
                  style={{marginTop: '2%'}}
                />
              </View>
              <View
                style={{
                  // backgroundColor: 'pink',
                  width: '25%',
                  marginLeft: '50%',
                  // marginTop: 5,
                }}>
                <Pressable
                  style={[styles.button1]}
                  onPress={() => setModalVisible(true)}>
                  <AntDesign name="calendar" size={20} color="black" />
                </Pressable>
              </View>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'left',
                  color: 'grey',
                  fontSize: 14,
                  fontWeight: '400',
                  marginTop: '1%',
                  marginLeft: '10%',
                }}>
                MRP Rs {res?.price}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'left',
                  color: '#000',
                  fontSize: 20,
                  fontWeight: '600',
                  marginTop: '5%',
                  marginLeft: '10%',
                }}>
                Places To Visit
              </Text>
              <Image
                style={{
                  margin: '5%',
                  borderRadius: 10,
                  width: windowWidth / 1.4,
                  alignSelf: 'center',
                  height: windowHeight / 5,
                }}
                source={{
                 uri: (res?.packageImage[0])
                  // uri: 'https://media.istockphoto.com/photos/beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india-picture-id1323846766?b=1&k=20&m=1323846766&s=170667a&w=0&h=ax37KHHN6VL7ESLPhlDkva26WZdDu8DFSHLIuEDTNY8=',
                }}
              />
              <Text
                style={{
                  textAlign: 'left',
                  color: 'grey',
                  fontSize: 14,
                  fontWeight: '400',
                  marginTop: '1%',
                  marginLeft: '10%',
                  marginBottom: '2%',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  {res?.city}{'\n'}
                </Text>
                {'\n'}
                {res?.overview}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  // const amount = '2000'
                  var options = {
                    name: res?.state,
                    description: res?.overview,
                    image: 'https://i.imgur.com/3g7nmJC.png',
                    currency: 'INR',
                    key: 'rzp_test_wJHRrVvmMKlou7', // Your api key
                    amount: res?.price,
                    theme: {color: '#C2F1FF'},
                  };
                  RazorpayCheckout.open(options)
                    .then(data => {
                      // handle success
                      alert(`Success: ${data.razorpay_payment_id}`);
                    })
                    .catch(error => {
                      // handle failure
                      alert(`Error: ${error.code} | ${error.description}`);
                    });
                }}
                // card no:-5267 3181 8797 5449
                style={styles.bookNow}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    textAlign: 'center',
                    marginTop: '3%',
                    color: '#fff',
                  }}>
                  Book Now
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <CalendarPicker
                      startFromMonday={true}
                      allowRangeSelection={true}
                      minDate={new Date(2010, 1, 1)}
                      maxDate={new Date(2050, 12, 31)}
                      width={windowWidth / 1.3}
                      weekdays={[
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thur',
                        'Fri',
                        'Sat',
                        'Sun',
                      ]}
                      months={[
                        'January',
                        'Febraury',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                      ]}
                      previousTitleStyle={{
                        color: 'blue',
                        fontSize: 24,
                      }}
                      previousTitle="<"
                      nextTitleStyle={{
                        color: 'blue',
                        fontSize: 24,
                      }}
                      nextTitle=">"
                      todayBackgroundColor="#63B2FB"
                      selectedDayColor="#63B2FB"
                      selectedDayTextColor="#fff"
                      scaleFactor={375}
                      textStyle={{
                        fontFamily: 'Cochin',
                        color: '#000000',
                        fontSize: 14,
                      }}
                      monthTitleStyle={{
                        // backgroundColor: 'pink',
                        fontWeight: '700',
                        fontSize: 18,
                      }}
                      yearTitleStyle={{
                        // backgroundColor: 'grey',
                        fontWeight: '700',
                        fontSize: 18,
                      }}
                      headerWrapperStyle={{
                        marginBottom: 20,
                        // paddingVertical: 20,
                      }}
                      onDateChange={onDateChange}
                      dayLabelsWrapper={{
                        backgroundColor: '#63B2FB',
                        borderRadius: 10,
                        borderColor: 0,
                      }}
                    />
                    <Pressable style={[styles.button]} onPress={onSubmit}>
                      <Text style={styles.textStyle}>OK</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            </View>
          </LinearGradient>
        </ScrollView>
      </View>
    );
  };
  
  export default BookNow;
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    map: {
      width: windowWidth / 1,
      height: windowHeight / 3,
      // backgroundColor: 'pink',
      // ...StyleSheet.absoluteFillObject,
    },
    button1: {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'white',
      borderRadius: 10,
      width: '80%',
      // borderWidth: 1,
      // elevation: 10,
    },
    modalView: {
      marginTop: 30,
      // backgroundColor: "pink",
      paddingHorizontal: 30,
      borderRadius: 40,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      backgroundColor: 'white',
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      alignSelf: 'center',
      marginVertical: 20,
      paddingVertical: 50,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      // backgroundColor: "grey",
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: 100,
      marginTop: 10,
      backgroundColor: '#63B2FB',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      alignSelf: 'center',
      // marginTop: 10,
      fontSize: 14,
    },
    bookNow: {
      marginTop: '10%',
      marginBottom: '5%',
      alignSelf: 'center',
      backgroundColor: '#63B2FB',
      width: windowWidth / 2,
      height: windowHeight / 18,
      padding: 5,
      borderRadius: 10,
    },
  });
  