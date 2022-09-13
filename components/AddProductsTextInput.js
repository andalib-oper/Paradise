import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'

const AddProductsTextInput = (props) => {
    return (
        <View>
            <View>
                <TextInput
                    {...props}
                    editable={props.editable}
                    style={styles.input}
                    keyboardType='default'
                    error={!props.inputIsValid && props.inputIsTouched}
                    placeholder={props.name}
                    placeholderTextColor={colors.black}
                    // value={props.value}
                />
            </View>
            {!props.inputIsValid && props.inputIsTouched && (
                <Text>{props.error}</Text>
            )}
        </View>
  )
}

export default AddProductsTextInput

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginBottom: '10%',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width:windowWidth/1.2
    },
})