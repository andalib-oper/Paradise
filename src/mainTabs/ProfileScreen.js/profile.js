import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import AddProductsTextInput from '../../../components/AddProductsTextInput';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { logUserOut } from '../../../redux/auth/action';

const data = [
  {
    firstName: 'Andalib',
    Address: 'Park street',
    phoneNo: '9876543212',
    lastName: 'Quraishi',
    email: 'andalib5@gmail.com',
    password: '12345678',
  },
];
const Profile = ({navigation}) => {
  const [res, setRes] = useState('');
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(stateCleanup());
  // }, [dispatch]);

  // useEffect(async () => {
  //   setLoading(true);
  //   let result = await fetch(
  //     `http://byit-be-store.herokuapp.com/api/product`,
  //   );
  //   result = await result.json();
  //   setRes(result);
  //   setLoading(false);
  //   console.log('object 333', result);
  // }, []);
  // const onSubmitHandler = () => {
  //   dispatch(
  //     updateProducts(
  //       {...res, category: category?.[0]?._id, subCategory: subCategory?.[0]?._id},
  //       productId,
  //     ),
  //   );
  //   Alert.alert('Successfully Edited Product');
  //   navigation.navigate('Products');
  // };
  // const handleChangeEdit = (inputValue, name) => {
  //   setRes(prevres => ({...prevres, [name]: inputValue}));
  // };
  // const blurListener = fieldId => {
  //   dispatch(blurFields(fieldId));
  // };
  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient colors={['#C2F1FF', '#F5F5F5']}>
          {/* <Text>profile</Text> */}
          <View
            style={{
              marginTop: '5%',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: '#000',
                fontWeight: '500',
              }}>
              Your Profile Details
            </Text>
          </View>
          {data.map(item => {
            return (
              <View>
                <View style={{marginTop: '10%', height: windowHeight / 10}}>
                  <Text style={styles.header}>First Name</Text>
                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: '2%',
                      height: 40,
                      width: windowWidth / 1.2,
                      // borderRadius: 10,
                      // backgroundColor: 'white'
                    }}>
                    <Text
                      style={{
                        marginLeft: '2%',
                        fontSize: 16,
                        // backgroundColor: 'pink'
                      }}>
                      {item.firstName}
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: '2%', height: windowHeight / 10}}>
                  <Text style={styles.header}>Last Name</Text>
                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: '2%',
                      height: 40,
                      width: windowWidth / 1.2,
                      // borderRadius: 10,
                      // backgroundColor: 'white'
                    }}>
                    <Text
                      style={{
                        marginLeft: '2%',
                        fontSize: 16,
                        // backgroundColor: 'pink'
                      }}>
                      {item.lastName}
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: '5%', height: windowHeight / 10}}>
                  <Text style={styles.header}>Address</Text>
                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: '2%',
                      height: 40,
                      width: windowWidth / 1.2,
                      // borderRadius: 10,
                      // backgroundColor: 'white'
                    }}>
                    <Text
                      style={{
                        marginLeft: '2%',
                        fontSize: 16,
                        // backgroundColor: 'pink'
                      }}>
                      {item.Address}
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: '2%', height: windowHeight / 10}}>
                  <Text style={styles.header}>Email</Text>
                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: '2%',
                      height: 40,
                      width: windowWidth / 1.2,
                      // borderRadius: 10,
                      // backgroundColor: 'white'
                    }}>
                    <Text
                      style={{
                        marginLeft: '2%',
                        fontSize: 16,
                        // backgroundColor: 'pink'
                      }}>
                      {item.email}
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: '2%', height: windowHeight / 10}}>
                  <Text style={styles.header}>Phone Number</Text>
                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: '2%',
                      height: 40,
                      width: windowWidth / 1.2,
                      // borderRadius: 10,
                      // backgroundColor: 'white'
                    }}>
                    <Text
                      style={{
                        marginLeft: '2%',
                        fontSize: 16,
                        // backgroundColor: 'pink'
                      }}>
                      {item.phoneNo}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{
              // backgroundColor: 'pink',
              width: '50%'
            }}>
              <TouchableOpacity
                style={styles.button}
                // onPress={() => onSubmitHandler()}>
                onPress={() => navigation.navigate('editprofile')}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              // backgroundColor: 'pink',
              width: '50%'
            }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(logUserOut())}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <AddProductsTextInput
            multiline
            numberOfLines={4}
            style={{height: '40%'}}
            name=""
            value={res.description}
            onChangeText={val => handleChangeEdit(val, 'description')}
            onBlur={() => {
              blurListener('description');
            }}
            error="*Required"
          /> */}
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Profile;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginLeft: '10%',
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  button: {
    marginTop: '15%',
    marginBottom: '10%',
    width: '40%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#63B2FB',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});
