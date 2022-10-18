import {StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import StackHeader from '../../../components/StackHeader';
import LinearGradient from 'react-native-linear-gradient';
import AddProductsTextInput from '../../../components/AddProductsTextInput';

const EditProfile = ({navigation}) => {
  const [res, setRes] = useState('');
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(stateCleanup());
  // }, [dispatch]);

  // useEffect(async () => {
  //   setLoading(true);
  //   let result = await fetch(
  //     `http://byit-be-store.herokuapp.com/api/product/${productId}`,
  //   );
  //   result = await result.json();
  //   setRes(result);
  //   setLoading(false);
  //   console.log('object 333', result);
  // }, []);
  // const onSubmitHandler = () => {
  //   dispatch(
  //     updateProducts(
  //       {...res, productId,
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
        {/* <LinearGradient colors={['#C2F1FF', '#F5F5F5']}> */}
          {/* <Text>profile</Text> */}
          <StackHeader
       headerName="Edit Profile"
       name="arrow-left"
       size={24}
       color="black"
       headerNavigation={() => navigation.goBack()}/>
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
              Edit Your Profile Details
            </Text>
          </View>
          <View style={{marginTop: '10%', height: windowHeight / 10}}>
            <Text style={styles.header}>First Name</Text>
             <AddProductsTextInput
            multiline
            numberOfLines={4}
            style={{height: '40%'}}
            name=""
            // value={res.description}
            // onChangeText={val => handleChangeEdit(val, 'description')}
            // onBlur={() => {
            //   blurListener('description');
            // }}
            error="*Required"
          /> 
          </View>
          <View style={{marginTop: '5%', height: windowHeight / 10, marginBottom: '0%'}}>
            <Text style={styles.header}>Last Name</Text>
             <AddProductsTextInput
            multiline
            numberOfLines={4}
            style={{height: '40%'}}
            name=""
            // value={res.description}
            // onChangeText={val => handleChangeEdit(val, 'description')}
            // onBlur={() => {
            //   blurListener('description');
            // }}
            error="*Required"
          /> 
          </View>
          {/* <View style={{marginTop: '5%', height: windowHeight / 10, marginBottom: '0%'}}>
            <Text style={styles.header}>Role</Text>
             <AddProductsTextInput
            multiline
            numberOfLines={4}
            style={{height: '40%'}}
            name=""
            // value={res.description}
            // onChangeText={val => handleChangeEdit(val, 'description')}
            // onBlur={() => {
            //   blurListener('description');
            // }}
            error="*Required"
          /> 
          </View> */}
          <View style={{marginTop: '5%', height: windowHeight / 10, marginBottom: '2%'}}>
            <Text style={styles.header}>Email</Text>
             <AddProductsTextInput
            multiline
            numberOfLines={4}
            style={{height: '40%'}}
            name=""
            // value={res.description}
            // onChangeText={val => handleChangeEdit(val, 'description')}
            // onBlur={() => {
            //   blurListener('description');
            // }}
            error="*Required"
          /> 
          </View>
           <View style={{marginTop: '5%', height: windowHeight / 10, marginBottom: '0%'}}>
            <Text style={styles.header}>Password</Text>
             <AddProductsTextInput
            multiline
            // numberOfLines={4}
            style={{height: '40%'}}
            name=""
            // value={res.description}
            // onChangeText={val => handleChangeEdit(val, 'description')}
            // onBlur={() => {
            //   blurListener('description');
            // }}
            error="*Required"
          /> 
          </View> 
          <TouchableOpacity
                style={styles.button}
                onPress={() => console.log("object")}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
        {/* </LinearGradient> */}
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#63B2FB',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
