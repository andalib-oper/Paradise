import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    return (
        <View style={styles.Container}>
            <View style={{
                flex: 0.25,
                backgroundColor: 'grey'
            }}>
                <View style={{
                    flexDirection: 'row'
                }}>
                <View style={{
                    backgroundColor: 'orange',
                    borderRadius: 80,
                    marginLeft: '10%',
                    borderColor: 'organge',
                    height: 85,
                    width: 85,
                    marginTop: '30%',
                }}>

                </View>
                <View style={{
                    marginTop: '35%',
                    marginLeft: 10,
                }}>
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        fontWeight: '600',
                        color: 'white'
                    }}>Distributor Name</Text>
                </View>
                </View>
            </View>
            <View style={{
                flex: 1,
                // backgroundColor: 'blue',
                marginTop: '15%',
            }}>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
            </View>
            <View style={{
                marginBottom: '10%',
                margin: '10%'
            }}>
                <Text>App Version - V2.00</Text>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    }
})