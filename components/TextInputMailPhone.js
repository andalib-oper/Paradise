import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import colors from '../constants/Colors'

export const Input = (props) => {
  return (
    <View>
        <View>
    <TextInput
    {...props}
            // style={styles.input}
            error = {!props.inputIsValid && props.inputIsTouched}
            placeholder={props.placeholder}
            placeholderTextColor={colors.black}
            // value={props.value}
        />
        </View>
        {!props.inputIsValid && props.inputIsTouched && (
            <Text style={styles.error}>{props.error}</Text>
        ) }
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderRadius: 10,
        backgroundColor: '#FAFAFA',
        padding: 10,
    },
    error: {
        color: 'red'
    }
})

export default Input;