import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShopsDetails = (props) => {
    return (
        <View>
            
            <View style={{
                flexDirection: 'row',
                marginLeft: '10%',
                // alignSelf: 'center',
                // backgroundColor: 'red'
            }}{...props}>
                <View style={{
                    // backgroundColor: 'pink',
                    // alignSelf: "flex-start",
                    width: '20%',
                    marginTop: 20,
                    // justifyContent: 'center',
                    marginBottom: '10%'
                }}>
                <Text style={{
                    // alignSelf: 'center',
                    textAlign: 'left',
                    fontSize: 14,
                    // fontFamily: 'Montserrat-Regular',
                    fontWeight: '600',
                    marginBottom: 10,
                    color: 'black'
                }}>Address:</Text>
                 <Text style={{
                    // alignSelf: 'center',
                    textAlign: 'left',
                    fontSize: 14,
                    fontWeight: '600',
                    marginBottom: 10,
                    color: 'black'
                }}>Timming:</Text>
                <Text style={{
                    // alignSelf: 'center',
                    textAlign: 'left',
                    fontSize: 14,
                    fontWeight: '600',
                    marginBottom: 10,
                    color: 'black'
                }}>Contact:</Text>
                <Text style={{
                    // alignSelf: 'center',
                    textAlign: 'left',
                    fontSize: 14,
                    fontWeight: '600',
                    marginBottom: 10,
                    color: 'black'
                }}>POC:</Text>
                <Text style={{
                    // alignSelf: 'center',
                    textAlign: 'left',
                    fontSize: 14,
                    fontWeight: '600',
                    marginBottom: 10,
                    color: 'black'
                }}>Phone:</Text>
                </View>
                <View style={{
                    // backgroundColor: 'grey',
                    alignSelf: 'center',
                    width: 'auto',
                    marginTop: 20,
                    justifyContent: 'center',
                    marginBottom: '10%'
                }}>
                <Text style={{
                    alignSelf: 'center',
                    textAlign: 'left',
                    fontSize: 14,
                    marginLeft: 10,
                    marginBottom: 10,
                    fontWeight: '600',
                    color: 'black'
                }}>{props.address}</Text>
                <Text style={{
                    // alignSelf: 'center',
                    textAlign: 'left',
                    fontSize: 14,
                    marginLeft: 10,
                    fontWeight: '600',
                    marginBottom: 10,
                    color: 'black'
                }}>{props.timing}-{props.timing2}
                </Text>
                <Text style={{
                    // alignSelf: 'center',
                    textAlign: 'left',
                    marginLeft: 10,
                    fontSize: 14,
                    fontWeight: '600',
                    marginBottom: 10,
                    color: 'black'
                }}>{props.contact}
                </Text>
                <Text style={{
                    // alignSelf: 'center',
                    marginLeft: 10,
                    textAlign: 'left',
                    fontSize: 14,
                    fontWeight: '600',
                    marginBottom: 10,
                    color: 'black'
                }}>{props.pocFirstName}{props.pocLastName}
                </Text>
                <Text style={{
                    // alignSelf: 'center',
                    marginLeft: 10,
                    textAlign: 'left',
                    fontSize: 14,
                    fontWeight: '600',
                    marginBottom: 10,
                    color: 'black'
                }}>{props.phone}
                </Text>
                </View>
            </View>
        </View>
    )
}

export default ShopsDetails

const styles = StyleSheet.create({})