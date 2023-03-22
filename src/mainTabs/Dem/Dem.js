import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clean, text } from '../../../redux/Dem/actions';

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
      <TouchableOpacity style={styles.cleanButton} onPress={()=>dispatch(clean())}>
        <Text style={styles.cleanButtonText}>Clean</Text>
      </TouchableOpacity>
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
      cleanButton:{
        alignSelf:"center",
        padding:10,
        margin:10,
        backgroundColor:'blue'
      },
      cleanButtonText:{
        alignSelf:'center',
        fontSize:16,
        color:'#fff',
        fontWeight:'bold'
      }
})