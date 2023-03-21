import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { text } from '../../../redux/Dem/actions';

const Dem = () => {
    const [number, onChangeNumber] = useState('');
    const dispatch=useDispatch()
    const demState = useSelector((state)=>state.demState)
    const update = (name,val) =>{
        dispatch(text(name,val))
    }
    console.log("namenum", demState?.inputVal?.name,demState?.inputVal?.num)
  return (
    <View>
       <TextInput
        style={styles.input}
        onChangeText={(e)=>update('name',e)}
        value={demState?.inputVal?.name}
      />
       <TextInput
        style={styles.input}
        onChangeText={(e)=>update('num',e)}
        value={demState?.inputVal?.num}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  )
}

export default Dem

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})