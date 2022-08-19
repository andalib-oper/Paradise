import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import { emailRegex, passwordRegex } from '../../constants/phoneRegex';
import {updateFields,blurFields,stateCleanup, newPassword} from '../../redux/emailConfirm/action'
import { showMessage } from 'react-native-flash-message';

const CreatePassword = ({ navigation }) => {
    // const [newpass, setNewpass] = useState(false);
    // const [confirmpass, setConfirmpass] = useState(false);
    const [npasswordVisible, setNPasswordVisible] = useState(true);
    const [cpasswordVisible, setCPasswordVisible] = useState(true);
    const emailFormState = useSelector((state) => state.emailFormState);
    const dispatch = useDispatch();
    const authState = useSelector(state => state.authState);

    useEffect(() => {
        // console.log("token", authState)
        dispatch(stateCleanup());
    }, [dispatch]);

    const blurListener = (fieldId) => {
        dispatch(blurFields(fieldId));
    };

    const checkValidity = (val, fieldId) => {
        let isValid = true;

        if (fieldId === 'cpassword' && val == emailFormState.inputValues.cpassword) {
            isValid = false;
        }

        dispatch(updateFields(val, fieldId, isValid))
    }
    const onSubmitHandler = () => {
        // if (
        //     //    profileState.inputValidity.email,
        //     emailFormState.inputValidity.npassword ==
        //     emailFormState.inputValidity.cpassword
        // ) {
        //     console.log('All fields validated');
        //     // console.log(authState.accessToken)
        //     dispatch(newPassword(emailFormState.inputValues));
        //     // Alert.alert("Successfully updated password")
        //     // dispatch(logUserOut())
        //     // console.log("ok", authState)
        //     //* the log in and all the checks are now happening via redux thunk. All we have to do now is to redirect the user based on the state.
        // } else {
        //     showMessage({
        //         message: 'Invalid inputs',
        //         description: 'Please check your inputs before proceeding',
        //         type: 'warning',
        //     });
        // }
        console.log("first")
        // dispatch(logUserIn(loginFormState.inputValues))
    }
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
                Create Password
            </Text>
            <Text style={{
                marginTop: '5%',
                marginLeft: 30,
                fontSize: 14
            }}>
                Complete the following latest data to enter the Paradise
            </Text>
            <View style={{
                // backgroundColor: 'grey',
                marginTop: '15%',

            }}>
                <View style={{
                    // backgroundColor: 'pink'
                }}>
                    <Text style={{
                        textAlign: 'left',
                        fontSize: 14,
                        marginLeft: 20,
                        color: '#000'
                    }}>
                     Password
                    </Text>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            // backgroundColor: 'red',
                            width: '90%',
                        }}>
                            <TextInput
                                value={emailFormState.inputValues.npassword}
                                inputIsValid={emailFormState.inputValidity.npassword}
                                inputIsTouched={emailFormState.isTouched.npassword}
                                style={styles.input}
                                onChangeText={(val) => checkValidity(val, 'npassword')}
                                onBlur={() => {
                                    blurListener('npassword');
                                }}
                                secureTextEntry={npasswordVisible}
                                placeholder="Enter your New Password"
                            />
                        </View>
                        <View style={{
                            // backgroundColor: 'grey',
                            width: '9%'
                        }}>
                            <AntDesign
                                name={npasswordVisible ? "eye" : "eyeo"}
                                onPress={() => setNPasswordVisible(!npasswordVisible)}
                                color='black'
                                style={styles.icon1}
                                size={30}
                            />
                        </View>
                    </View>
                </View>
                <View style={{
                    // backgroundColor: 'orange'
                }}>
                    <Text style={{
                        textAlign: 'left',
                        fontSize: 14,
                        marginLeft: 20,
                        color: '#000'
                    }}>
                        Confirm Password
                    </Text>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            // backgroundColor: 'red',
                            width: '90%',
                        }}>
                            <TextInput
                                value={emailFormState.inputValues.cpassword}
                                inputIsValid={emailFormState.inputValidity.cpassword}
                                inputIsTouched={emailFormState.isTouched.cpassword}
                                style={styles.input}
                                onChangeText={(val) => checkValidity(val, 'cpassword')}
                                onBlur={() => {
                                    blurListener('cpassword');
                                }}
                                error="Invalid password"
                                secureTextEntry={cpasswordVisible}
                                placeholder="Enter your Confirm Password"
                            />
                        </View>
                        <View style={{
                            // backgroundColor: 'grey',
                            width: '9%'
                        }}>
                            <AntDesign
                                name={cpasswordVisible ? "eye" : "eyeo"}
                                onPress={() => setCPasswordVisible(!cpasswordVisible)}
                                color='black'
                                style={styles.icon1}
                                size={30}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                // backgroundColor: 'blue',
                marginTop: 10,
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    onPress={() => onSubmitHandler()}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Continue</Text>
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
    linearGradient:{
        flex: 1
    },
    input: {
        height: 40,
        margin: 15,
        borderRadius: 10,
        backgroundColor: '#FAFAFA',
        padding: 10,
    },
    icon1: {
        alignContent: 'center',
        marginTop: '55%'
    },
    button: {
        marginTop: '20%',
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
export default CreatePassword;