import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {emailRegex, phoneRegex} from '../../constants/phoneRegex';

const Register = ({navigation}) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const onSubmitHandler = () => {
    console.log('object');
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
            <TextInput
              style={styles.input}
              value={email}
              placeholder="Enter Your Email"
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: '5%',
                marginLeft: '10%',
                color: '#000',
              }}>
              Full Name
            </Text>
            <TextInput
              style={styles.input}
              value={name}
              placeholder="Enter Your Full Name"
              onChangeText={setName}
            />
          </View>
          <View>
            <Text
              style={{
                marginTop: '5%',
                marginLeft: '10%',
                color: '#000',
              }}>
              Phone Number
            </Text>
            <TextInput
              style={styles.input}
              value={phone}
              placeholder="Enter Your Phone Number"
              onChangeText={setPhone}
            />
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
