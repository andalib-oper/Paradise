import {
  StyleSheet,
  Text,
  TextInput,
  Alert,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../components/TextInputMailPhone';
import { stateCleanup, blurFields,updateFields } from '../../redux/register/actions';
import {emailRegex, phoneRegex} from '../../constants/phoneRegex';
import { useDispatch, useSelector } from 'react-redux';
import { regUserUp } from '../../redux/auth/action';
// import AntDesign from 'react-native-vector-icons/AntDesign'

const Register = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(true)
  const registerFormState = useSelector(state=> state.registerFormState)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("token")
    dispatch(stateCleanup());
  }, [dispatch]);
  const onSubmitHandler = () => {
    console.log("mail", registerFormState)
    if (
      registerFormState.inputValidity.email ,
      registerFormState.inputValidity.firstName,
      registerFormState.inputValidity.lastName,
      registerFormState.inputValidity.password,
      registerFormState.inputValidity.cpassword
    ) {
      console.log('All fields validated');
      dispatch(regUserUp(registerFormState.inputValues,  () => {
        navigation.navigate('createpassword');
      }));
      // navigation.navigate('createpassword')
      // console.log("ok", authState)
      //* the log in and all the checks are now happening via redux thunk. All we have to do now is to redirect the user based on the state.
    }
    else {
      //    showMessage({
      //     message: 'Invalid Inputs',
      //     description: 'Please check your input before proceeding',
      //     type: 'warning'
      //    })
      Alert.alert("Please Input Fields Correctly")
    }
  };
  const blurListener = (fieldId) => {
    dispatch(blurFields(fieldId));
  };

  const checkValidity = (val, fieldId) => {
    let isValid = true;
    if (fieldId === 'email' && !emailRegex.test(String(val).toLowerCase())) {
      // && !emailRegex.test(String(val).toLowerCase())
      isValid = false;
    }

    if (fieldId === 'password' && !passwordRegex2.test(String(val))) {
      isValid = false;
    }
    dispatch(updateFields(val, fieldId, isValid));
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C2F1FF', '#F5F5F5']}
        style={styles.linearGradient}>
        <ScrollView>
          <AntDesign
            name="left"
            color={'black'}
            size={24}
            style={{
              marginLeft: '5%',
              marginTop: '10%',
            }}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              marginTop: '5%',
              marginLeft: '10%',
              textAlign: 'left',
              fontSize: 25,
              fontWeight: '600',
              color: '#022B51',
            }}>
            Register
          </Text>
          <Text
            style={{
              marginTop: '5%',
              marginLeft: '10%',
              textAlign: 'left',
              fontSize: 14,
            }}>
            Enter your details to register
          </Text>
          <View>
            <Text
              style={{
                marginTop: '10%',
                marginLeft: '10%',
                color: '#000',
              }}>
              Email
            </Text>
            <Input
              placeholderTextColor="#000"
              value={registerFormState.inputValues.email}
              inputIsValid={registerFormState.inputValidity.email}
              inputIsTouched={registerFormState.isTouched.email}
              style={styles.input}
              error="Invalid Email"
              placeholder= "Enter Your Email"
              errorStyle={styles.error}
              onChangeText={(val) => checkValidity(val, 'email')}
              onBlur={() => {
                blurListener('email');
              }}
              // placeholder="Enter Your Email Address"
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: '5%',
                marginLeft: '10%',
                color: '#000',
              }}>
              First Name
            </Text>
            {/* <TextInput
              style={styles.input}
              value={name}
              placeholder="Enter Your Full Name"
              onChangeText={setName}
            /> */}
             <Input
              placeholderTextColor="#000"
              value={registerFormState.inputValues.firstName}
              inputIsValid={registerFormState.inputValidity.firstName}
              inputIsTouched={registerFormState.isTouched.firstName}
              style={styles.input}
              error="Invalid First Name"
              errorStyle={styles.error}
              onChangeText={(val) => checkValidity(val, 'firstName')}
              onBlur={() => {
                blurListener('firstName');
              }}
              placeholder="Enter Your First Name"
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: '5%',
                marginLeft: '10%',
                color: '#000',
              }}>
            Last Name
            </Text>
            <Input
              placeholderTextColor="#000"
              value={registerFormState.inputValues.lastName}
              inputIsValid={registerFormState.inputValidity.lastName}
              inputIsTouched={registerFormState.isTouched.lastName}
              style={styles.input}
              error="Invalid last Name"
              errorStyle={styles.error}
              onChangeText={(val) => checkValidity(val, 'lastName')}
              onBlur={() => {
                blurListener('lastName');
              }}
              placeholder="Enter Your Last Name"
            />
          </View>
          <View>
          <Text
              style={{
                marginTop: '5%',
                marginLeft: '10%',
                color: '#000',
              }}>
              Email
            </Text>
          <View style={{
            // backgroundColor: 'grey',
            flexDirection: 'row'
          }}>
            <View style={{
              // backgroundColor: 'yellow',
              width: '85%'
            }}>
              <Input
                placeholder="Enter Your Password"
                placeholderTextColor="#000"
                theme={{ colors: { primary: "#fff" } }}
                error="Invalid password"
                style={styles.input}
                secureTextEntry={passwordVisible}
                value={registerFormState.inputValues.password}
                inputIsValid={registerFormState.inputValidity.password}
                inputIsTouched={registerFormState.isTouched.password}
                onChangeText={(val) => checkValidity(val, 'password')}
                onBlur={() => {
                  blurListener('password');
                }}
              />
            </View>
            <View style={{
              // backgroundColor: 'orange',
              width: '8%'
            }}>
              <AntDesign
                name={passwordVisible ? "eye" : "eyeo"}
                onPress={() => setPasswordVisible(!passwordVisible)}
                color='black'
                style={styles.icon1}
                size={30}
              />
            </View>
          </View>
          </View>
          <View
            style={{
              // backgroundColor: 'blue',
              marginTop: '10%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => onSubmitHandler()}
              style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: '15%',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: 'grey',
              }}>
              Have an account ?{' '}
              <Text
                onPress={() => navigation.navigate('login')}
                style={{
                  color: '#3669C9',
                }}>
                Sign In
              </Text>
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  icon1: {
    alignContent: 'center',
    marginTop: '60%'
  },
  input: {
    height: 40,
    width: '80%',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginTop: '5%',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    marginTop: 1,
    marginBottom: 5,
    width: '80%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#63B2FB',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
