import { StyleSheet, Text, View, TouchableOpacity, Pressable, Modal, Alert} from 'react-native'
import React, {useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { deleteProducts } from '../redux/Products/actions'

const MoreOptionEdit = () => {
    // const navigation = useNavigation()
    // // const productId = navigation.getId()
    // // const { productId }= route.params
    // const [modalVisible, setModalVisible] = useState(false);
    // const dispatch = useDispatch()
    // // const route = useRoute()
    // const modelClose = () => {
    //     setModalVisible(!modalVisible)
    // }
    // const onSubmitDel = () => {
    //     dispatch(deleteProducts())
    // }
    // // console.log("delete product Id", productId)
    return (
    //     <View>
    //         <View>
    //             <TouchableOpacity onPress={() => setModalVisible(true)}>
    //                 <Feather
    //                     name="more-vertical"
    //                     size={25}
    //                     color='black'
    //                 />
    //             </TouchableOpacity>
    //         </View>
    //         <View>
    //             <Modal
    //                 animationType="slide"
    //                 transparent={true}
    //                 visible={modalVisible}
    //                 onRequestClose={() => {
    //                     Alert.alert("Modal has been closed.");
    //                     setModalVisible(!modalVisible);
    //                 }}
    //             >
    //                 {/* <View style={styles.centeredView}> */}
    //                 <View style={styles.modalView}>
    //                     {/* <Text style={styles.modalText}>Hello World!</Text> */}

    //                     <Pressable
    //                         style={[styles.button]}
    //                         onPress={() => onSubmitDel()}>
    //                         {/* //  onPress={() => setModalVisible(!modalVisible)}> */}
    //                         {/* // onPress={() => { button ? onSubmitHandler() : setModalVisible(!modalVisible) }}> */}
    //                         <View style={{
    //                             // backgroundColor: 'pink',
    //                             // margin: 10,
    //                             // marginRight: 30,
    //                             alignItems: 'flex-start',
    //                             flexDirection: 'row'
    //                         }}>
    //                             <View style={{
    //                                 // backgroundColor: 'blue',
    //                                 // alignContent: 'flex-start',
    //                                 // alignItems: 'flex-start',
    //                                 // justifyContent: 'flex-start',
    //                                 alignSelf: 'flex-start',
    //                                 width: '30%'
    //                             }}>
    //                                 <MaterialIcons
    //                                     name="add-circle-outline"
    //                                     size={25}
    //                                     color='black'
    //                                 />
    //                             </View>
    //                             <View style={{
    //                                 // backgroundColor: 'red',
    //                                 width: '80%'
    //                             }}>
    //                                 <Text style={styles.textStyle}>Remove</Text>
    //                             </View>
    //                         </View>
    //                     </Pressable>
    //                     <Pressable
    //                         style={[styles.buttonCan]}
    //                         onPress={()=>console.log("activated")}>
    //                         {/* //  onPress={() => setModalVisible(!modalVisible)}> */}
    //                         {/* // onPress={() => { button ? onSubmitHandler() : setModalVisible(!modalVisible) }}> */}
    //                         <View style={{
    //                             // backgroundColor: 'pink',
    //                             // margin: 10,
    //                             // marginRight: 30,
    //                             alignItems: 'flex-start',
    //                             flexDirection: 'row'
    //                         }}>
    //                             <View style={{
    //                                 // backgroundColor: 'blue',
    //                                 // alignContent: 'flex-start',
    //                                 // alignItems: 'flex-start',
    //                                 // justifyContent: 'flex-start',
    //                                 alignSelf: 'flex-start',
    //                                 width: '30%'
    //                             }}>
    //                                 <Fontisto
    //                                     name="checkbox-active"
    //                                     size={20}
    //                                     color='black'
    //                                 />
    //                             </View>
    //                             <View style={{
    //                                 // backgroundColor: 'red',
    //                                 width: '80%'
    //                             }}>
    //                                 <Text style={styles.textStyle}>Activate</Text>
    //                             </View>
    //                         </View>
    //                     </Pressable>
    //                     <Pressable
    //                         style={[styles.buttonCan]}
    //                         onPress={()=>console.log("deactivate")}>
    //                         {/* //  onPress={() => setModalVisible(!modalVisible)}> */}
    //                         {/* // onPress={() => { button ? onSubmitHandler() : setModalVisible(!modalVisible) }}> */}
    //                         <View style={{
    //                             // backgroundColor: 'pink',
    //                             // margin: 10,
    //                             // marginRight: 30,
    //                             alignItems: 'flex-start',
    //                             flexDirection: 'row'
    //                         }}>
    //                             <View style={{
    //                                 // backgroundColor: 'blue',
    //                                 // alignContent: 'flex-start',
    //                                 // alignItems: 'flex-start',
    //                                 // justifyContent: 'flex-start',
    //                                 alignSelf: 'flex-start',
    //                                 width: '30%'
    //                             }}>
    //                                 <Entypo
    //                                     name="cross"
    //                                     size={25}
    //                                     color='black'
    //                                 />
    //                             </View>
    //                             <View style={{
    //                                 // backgroundColor: 'red',
    //                                 width: '80%'
    //                             }}>
    //                                 <Text style={styles.textStyle}>Deactivate</Text>
    //                             </View>
    //                         </View>
    //                     </Pressable>
    //                 </View>
    //             </Modal>
    //         </View>
    //     </View>
    <View>
        <Text>hey</Text>
    </View>
    )
}

export default MoreOptionEdit

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