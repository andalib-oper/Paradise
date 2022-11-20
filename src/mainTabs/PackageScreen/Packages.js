import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState}from 'react'
import StackHeader from '../../../components/StackHeader'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import SearchBar from 'react-native-dynamic-search-bar';
import axios from 'axios';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import ProductButton from '../../../components/productButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Packages = () => {
  const navigation = useNavigation()
  const [res,setRes] = useState()
  const [filteredData, setFilteredData] = useState([]);
  const [serachText, setSearchText] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const filter = () => {
    // console.log("here 2")
    setFilterVisible(!filterVisible);
  };
  const url = `https://paradis-be-iam.herokuapp.com/api`;
  useEffect(() => {
    axios.get(`${url}/package`).then(response => {
      setRes(response.data);
      setFilteredData(response.data);
    });
  }, []);
  // console.log("res", res)
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  const price = ["Egypt", "Canada", "Australia", "Ireland"]
  const handleOnChangeText = text => {
    // ? Visible the spinner
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = res.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.state
          ? item.state.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        console.log("text data", textData)
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchText(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredData(res);
      setSearchText(text);
    }
    console.log('filter data', filteredData);
    console.log('search ', serachText);
    // ? After you've done to implement your use-case
    // ? Do not forget to set false to spinner's visibility
  };
  return(
    <View style={styles.container}>
        {/* <OrientationLoadingOverlay
        visible={authState.loading}
        color="white"
        indicatorSize="large"
        messageFontSize={24}
        message="Loading... 😀😀😀"
      /> */}
      <StackHeader headerName="Packages" />
      <ScrollView>
        <LinearGradient
          colors={['#C2F1FF', '#F5F5F5']}
          style={styles.linearGradient}>
        <View>
          <SearchBar
            style={styles.searchbar}
            placeholder="Search By price here"
            // value=
            // onPress={() => alert('onPress')}
            onClearPress={()=>handleOnChangeText('')}
            onChangeText={val => handleOnChangeText(val)}
          />
        </View>
    {filteredData ? (
      <View>
      {filteredData &&
        filteredData?.map(item => {
          // console.log("130", item._id)
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
                  {item?.state}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'grey',
                    marginTop: '2%',
                    marginLeft: '8%',
                  }}>
                  {item.duration}
                  {'\b'}Trips
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
                    // uri: "https://i.imgur.com/MABUbpDl.jpg"
                    uri: item.packageImage[0]
                      ? item.packageImage[0]
                      : 'https://i.imgur.com/MABUbpDl.jpg',
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
                        {item.inclusion}
                      </Text>
                    </Text>
                  </View>
                  <View style={{marginLeft: '20%'}}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('details', {
                          packageId: item._id,
                        })
                      }
                      // onPress={()=> console.log("object", item._id)}
                      style={styles.bookNow}>
                      <Text style={{color: '#fff'}}>View Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
    </View>
     ) : (
       <View>
         {res &&
           res?.map(item => {
             // console.log("130", item._id)
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
                     {item?.state}
                   </Text>
                   <Text
                     style={{
                       fontSize: 14,
                       color: 'grey',
                       marginTop: '2%',
                       marginLeft: '8%',
                     }}>
                     {item.duration}
                     {'\b'}Trips
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
                       // uri: "https://i.imgur.com/MABUbpDl.jpg"
                       uri: item.packageImage[0]
                         ? item.packageImage[0]
                         : 'https://i.imgur.com/MABUbpDl.jpg',
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
                           {item.inclusion}
                         </Text>
                       </Text>
                     </View>
                     <View style={{marginLeft: '20%'}}>
                       <TouchableOpacity
                         onPress={() =>
                           navigation.navigate('details', {
                             packageId: item._id,
                           })
                         }
                         // onPress={()=> console.log("object", item._id)}
                         style={styles.bookNow}>
                         <Text style={{color: '#fff'}}>View Details</Text>
                       </TouchableOpacity>
                     </View>
                   </View>
                 </View>
               </View>
             );
           })}
       </View>
     )}
     </LinearGradient>
     </ScrollView>
     </View>
  )
}

export default Packages

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  animation: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    backgroundColor: 'yellow',
    // justifyContent: 'center',
    alignSelf: 'center',
    // alignContent: 'center'
  },
  grid: {
    position: 'relative',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 30,
    marginTop: '10%',
  },
  gridItem: {
    margin: 5,
    width: windowWidth / 2.4,
    height: windowHeight / 3.2,
    // backgroundColor: 'pink',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  box2ItemInner: {
    // backgroundColor: 'red',
    alignSelf: 'center',
    alignItems: 'center',
  },
  box2text: {
    // justifyContent: "center",
    // alignSelf: 'center',
    textAlign: 'left',
    // backgroundColor: 'orange',
    marginTop: '5%',
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
    width: 'auto',
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 40,
    // marginBottom: '10%',
    // margin: '10%',
    alignSelf: 'center',
    // marginTop: '5%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {
    color: '#444',
    textAlign: 'left',
    fontSize: 12,
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF',
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {
    color: '#444',
    textAlign: 'left',
  },
  image: {
    width: windowWidth / 2.8,
    height: windowWidth / 2.5,
  },
  searchbar: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    alignSelf: 'flex-end',
    // marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%',
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
    width: windowWidth / 6,
    height: windowHeight / 24,
  },
  search: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
  headerButton: {
    // marginBottom: '5%',
    justifyContent: 'center',
    // marginTop: '5%',
    // flexDirection: 'row',
    // backgroundColor: '#C2F1FF',
    backgroundColor: '#fff'
  },
  recomView: {
    marginBottom: '5%',
    marginTop: '5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
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