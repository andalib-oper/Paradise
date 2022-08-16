import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import { emailRegex, passwordRegex } from '../../constants/phoneRegex';
import LinearGradient from 'react-native-linear-gradient';
import {updateFields,blurFields,stateCleanup} from '../../redux/emailConfirm/action'
import {checkEmail} from '../../redux/emailConfirm/action';

const ResetPassword = ({ navigation }) => {
    // const [email, onChangeEmail] = useState();
    const emailFormState = useSelector((state) => state.emailFormState);
    const dispatch = useDispatch();
    const authState = useSelector(state => state.authState);
    useEffect(() => {
        // console.log("token", authState)
        dispatch(stateCleanup());
    }, [dispatch]);

    const onSubmitHandler = useCallback(()=>{
        if (
            emailFormState.inputValidity.email
            // emailFormState.inputValidity.password
        ) {
            // console.log('All fields validated');
            // (async () => {
             dispatch(checkEmail(emailFormState.inputValues));
                if (emailFormState.isValidEmail) {
                navigation.navigate("updatepassword")
            }
            //   })();
            // dispatch(checkEmail(emailFormState.inputValues));
            // if (emailFormState.isValidEmail) {
            //     navigation.navigate("updatepassword")
            // }
            // console.log("ok", authState)
            //* the log in and all the checks are now happening via redux thunk. All we have to do now is to redirect the user based on the state.
        } else {
            showMessage({
                message: 'Invalid inputs',
                description: 'Please check your inputs before proceeding',
                type: 'warning',
            });
        }
        // return(
        //     // navigation.navigate('updatepassword')
        // )
    },[emailFormState])

    const blurListener = (fieldId) => {
        dispatch(blurFields(fieldId));
    };
    const checkValidity = (val, fieldId) => {
        let isValid = true;
        if (fieldId === 'email' && !emailRegex.test(String(val).toLowerCase())) {
            isValid = false;
        }
        dispatch(updateFields(val, fieldId, isValid));
    };
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#C2F1FF', '#F5F5F5']} style={styles.linearGradient}>
            <AntDesign
                name='left'
                color={'black'}
                size={24}
                style={{
                    margin: 20,
                    marginTop: 25,
                }}
                onPress={() => navigation.goBack()}
            />
            <Text style={{
                marginTop: '15%',
                marginLeft: 30,
                fontSize: 25,
                fontWeight: '600',
                color: '#0C1A30'
            }}>
                Reset Password
            </Text>
            <Text style={{
                marginTop: '5%',
                marginLeft: 30,
                fontSize: 14
            }}>
                Enter Email / No. Mobile account to reset your password
            </Text>

            <View style={styles.mail}>
                <Text style={{
                    textAlign: 'left',
                    fontSize: 14,
                    marginLeft: 20,
                    color: '#000'
                }}>
                    Email/Phone
                </Text>
                <View style={{
                    // backgroundColor: 'pink',
                    marginTop: '5%',
                    width: '100%'
                }}>
                    <TextInput
                        value={emailFormState.inputValues.email}
                        inputIsValid={emailFormState.inputValidity.email}
                        inputIsTouched={emailFormState.isTouched.email}
                        style={styles.input}
                        onChangeText={(val) => checkValidity(val, 'email')}
                        onBlur={() => {
                            blurListener('email');
                        }}
                        placeholder="Enter your email address/ phone number"
                    />
                </View>
            </View>
            <View style={{
                // backgroundColor: 'blue',
                marginTop: '20%',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    // onPress={() => onSubmitHandler()}
                    onPress={()=>navigation.navigate('updatepassword')}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    linearGradient: {
        flex: 1
    },
    input: {
        height: 40,
        margin: 12,
        borderRadius: 10,
        backgroundColor: '#FAFAFA',
        padding: 10,
    },
    mail: {
        // backgroundColor: 'grey',
        marginTop: '20%',
        marginLeft: 15,
        marginRight: 20,
        justifyContent: 'center'
    },
    button: {
        marginTop: 10,
        marginBottom: 5,
        width: '80%',
        padding: 10,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        backgroundColor: '#63B2FB',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
})
export default ResetPassword;