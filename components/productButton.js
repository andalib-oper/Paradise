import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ImageOverlay from 'react-native-image-overlay';
import Overlay from 'react-native-modal-overlay';
import { getAllProducts, setProduct } from '../redux/Products/actions';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ProductButton = () => {
    // console.log("hit on product")
    const navigation = useNavigation();
    const productState = useSelector((state) => state.productState)
    const authState = useSelector((state) => state.authState)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts(authState.id));
    }, [dispatch]);
    // console.log("hit on product6")
    return (
        <View>
            {/* <OrientationLoadingOverlay
               visible={productState.loading}
               color="white"
               indicatorSize="large"
               messageFontSize={24}/> */}
               {/* <Text>hit on</Text> */}
            <View style={styles.grid}>
                {productState.data && productState.data
                    .map((item) => {
                        return (
                            //  <TouchableOpacity onPress={()=> console.log(item._id)}>
                              <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate('editProducts',{ productId: item._id})}> 
                                {/* <View style={styles.deactivateOverlay}> */}
                                <View style={styles.box2ItemInner}>
                                    {/* {productState.data && productState.data
                                        .map((img) => {
                                            return (
                                                <View>
                                                    <Image source={img.productImage}
                                                        // key={dest.destinationId}
                                                        style={{ height: 200, width: 600 }}
                                                        resizeMode='contain' />
                                                </View>
                                            )
                                        })} */}
                                    <Image
                                        style={styles.image}
                                        // source={{
                                        //     // uri: 'https://res.cloudinary.com/dantech54353/image/upload/v1657883960/kkuzl73daydgehodpvkj.jpg'
                                        // uri: item.productImage
                                        // }} 
                                        source={{uri:(item.productImage[0])?item.productImage[0]:'https://res.cloudinary.com/dantech54353/image/upload/v1657883960/kkuzl73daydgehodpvkj.jpg'}}
                                        />
                                    <Text style={styles.box2text}>{item.name}</Text>
                                    {/* <Text style={styles.box2text}>name</Text> */}
                                    {/* </View> */}
                                </View>
                            </TouchableOpacity>
                        )
                    })}
            </View>
            {/* <Text>hit still working</Text> */}
        </View>
    )
}

export default ProductButton

const styles = StyleSheet.create({
    grid: {
        position: 'relative',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        borderRadius: 20,
        // paddingTop: 10,
        paddingBottom: 30,
        // marginTop: '1%',
    },
    gridItem: {
        // margin: 5,
        width: windowWidth / 2.4,
        height: windowHeight / 3.2,
        // backgroundColor: 'pink',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    gridItemView: {
        margin: 5,
        width: windowWidth / 2.4,
        height: windowHeight / 3.2,
        // backgroundColor: 'pink',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    box2ItemInner: {
        // backgroundColor: 'red',
        alignSelf: 'center',
        alignItems: 'center',
    },
    box2text: {
        // justifyContent: "center",
        // alignSelf: 'center',
        textAlign: 'left',
        // backgroundColor: 'orange',
        marginTop: '5%',
        fontWeight: '400',
        fontSize: 16,
        color: 'black',
        width: 'auto',
    },
    image: {
        width: windowWidth / 2.8,
        height: windowWidth / 2.5
    },
    deactivateOverlay: {
        backgroundColor: "grey",
        opacity: 0.3
    }
})