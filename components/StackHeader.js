import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import OptionsMenu from "react-native-option-menu";

const StackHeader = (prop) => {
    const navigation = useNavigation()
    const myIcon = (<Feather name="more-vertical" size={24} color="#000" />)
    const addPro = () => {
        console.log("first")
        navigation.navigate('addnew')
    }
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.icon}>
                    <Feather name={prop.name} size={prop.size} color={prop.color} onPress={prop.headerNavigation} />
                </View>
                <View style={styles.nameView}>
                    <Text {...prop} style={styles.name}>{prop.headerName}</Text>
                </View>
                <View style={styles.iconFilter}>
                    <AntDesign name={prop.filterName} size={prop.filterSize} color={prop.filterColor} onPress={prop.filterNavigation} />
                </View>
                <View style={styles.iconMenu}>
                    {prop.moreOption}
                    {/* <Pressable {...prop} onPress={()=> {prop.moreOption}}> */}
                        <OptionsMenu {...prop}
                            customButton={prop.customButton}
                            destructiveIndex={1}
                            options={[prop.options]}
                            actions={[prop.actions]} />
                    {/* </Pressable>
                    {/* <MoreOptionModal/> */}
                    {/* <Products/>? <MoreOptionModal/> : <MoreOptionEdit/> */}
                    {/* <Feather name={prop.menuName} size={prop.menuSize} color={prop.menuColor} onPress={()=> <MoreOptionModal/>}/> */}
                </View>
            </View>
            {/* <Products {...prop} filter={filterVisible}/> */}
        </View>
    )
}

export default StackHeader

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
    header: {
        width: width / 1,
        // backgroundColor: '#C2F1FF',
        backgroundColor: '#fff',
        height: height / 14,
        elevation: 5,
        flexDirection: 'row'
    },
    icon: {
        marginTop: '4%',
        marginLeft: '3%',
        width: '8%'
    },
    nameView: {
        marginTop: '3%',
        marginLeft: '3%',
        width: '40%',
    },
    name: {
        fontSize: 20,
        color: 'black',
        // textAlign: 'center',
        fontWeight: '600'
    },
    iconFilter: {
        marginLeft: '30%',
        marginTop: '3%'
    },
    iconMenu: {
        margin: '3%'
    }
})
