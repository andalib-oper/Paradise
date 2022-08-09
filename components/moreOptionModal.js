import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'


const MoreOptionModal = (prop) => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const modelClose = () => {
        setModalVisible(!modalVisible)
    }
    const onSubmit = () => {
        console.log("first")
    }
    return (
        <View {...prop}>
            <View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Feather
                        name="more-vertical"
                        size={25}
                        color='black'
                    />
                </TouchableOpacity>
            </View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    {/* <View style={styles.centeredView}> */}
                    <View style={styles.modalView}>
                        {/* <Text style={styles.modalText}>Hello World!</Text> */}

                        <Pressable
                            style={[styles.button]}
                            onPress={() => navigation.navigate('addnew')}>
                            {/* //  onPress={() => setModalVisible(!modalVisible)}> */}
                            {/* // onPress={() => { button ? onSubmitHandler() : setModalVisible(!modalVisible) }}> */}
                            <View style={{
                                // backgroundColor: 'pink',
                                // margin: 10,
                                // marginRight: 30,
                                alignItems: 'flex-start',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    // backgroundColor: 'blue',
                                    // alignContent: 'flex-start',
                                    // alignItems: 'flex-start',
                                    // justifyContent: 'flex-start',
                                    alignSelf: 'flex-start',
                                    width: '30%'
                                }}>
                                    <MaterialIcons
                                        name="add-circle-outline"
                                        size={25}
                                        color='black'
                                    />
                                </View>
                                <View style={{
                                    // backgroundColor: 'red',
                                    width: '80%'
                                }}>
                                    <Text style={styles.textStyle}>Add New</Text>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable
                            style={[styles.buttonCan]}
                            onPress={modelClose}>
                            {/* //  onPress={() => setModalVisible(!modalVisible)}> */}
                            {/* // onPress={() => { button ? onSubmitHandler() : setModalVisible(!modalVisible) }}> */}
                            <View style={{
                                // backgroundColor: 'pink',
                                // margin: 10,
                                // marginRight: 30,
                                alignItems: 'flex-start',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    // backgroundColor: 'blue',
                                    // alignContent: 'flex-start',
                                    // alignItems: 'flex-start',
                                    // justifyContent: 'flex-start',
                                    alignSelf: 'flex-start',
                                    width: '30%'
                                }}>
                                    <AntDesign
                                        name="minuscircleo"
                                        size={25}
                                        color='black'
                                    />
                                </View>
                                <View style={{
                                    // backgroundColor: 'red',
                                    width: '80%'
                                }}>
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default MoreOptionModal

const styles = StyleSheet.create({
    modalView: {
        marginLeft: '50%',
        marginTop: '12%',
        marginRight: '8%',
        backgroundColor: "#f4f4f4",
        paddingHorizontal: 10,
        borderRadius: 5,
        // padding: 15,
        alignItems: 'flex-start',
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2
        // },
    },
    button: {
        borderRadius: 20,
        paddingHorizontal: 5,
        borderColor: '#000',
        // borderBottomWidth: 1,
        // elevation: 2,
        marginBottom: '10%',
        width: 100,
        marginTop: '10%',
        backgroundColor: '#f4f4f4',
    },
    buttonCan: {
        borderRadius: 20,
        paddingHorizontal: 5,
        borderColor: '#000',
        // borderBottomWidth: 1,
        // elevation: 2,
        marginBottom: '10%',
        width: 100,
        // marginTop: '10%',
        backgroundColor: '#f4f4f4',
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        marginTop: 3,
        fontSize: 14
      },
})