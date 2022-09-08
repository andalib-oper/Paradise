import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';

const EditProfile = () => {
    const [res, setRes] = useState('');
    const dispatch = useDispatch();
  
    // useEffect(() => {
    //   dispatch(stateCleanup());
    // }, [dispatch]);
  
    // useEffect(async () => {
    //   setLoading(true);
    //   let result = await fetch(
    //     `http://byit-be-store.herokuapp.com/api/product/${productId}`,
    //   );
    //   result = await result.json();
    //   setRes(result);
    //   setLoading(false);
    //   console.log('object 333', result);
    // }, []);
    // const onSubmitHandler = () => {
    //   dispatch(
    //     updateProducts(
    //       {...res, productId,
    //     ),
    //   );
    //   Alert.alert('Successfully Edited Product');
    //   navigation.navigate('Products');
    // };
    // const handleChangeEdit = (inputValue, name) => {
    //   setRes(prevres => ({...prevres, [name]: inputValue}));
    // };
    // const blurListener = fieldId => {
    //   dispatch(blurFields(fieldId));
    // };
  return (
    <View>
      <Text>EditProfile</Text>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({})