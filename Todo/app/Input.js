import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ inputValue, inputChange }) => (
    <View style={styles.inputContainer}>
        <TextInput 
            value = {inputValue}
            style={styles.input}
            placeholder='What needs to be done?'
            palceholderTextColor='#CACACA'
            selectionColor='#666666'
            onChangeText={inputChange} />

    </View>
)

const styles = StyleSheet.create ({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 }
    },
    input: {
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#ffffff'
    }
})
export default Input;