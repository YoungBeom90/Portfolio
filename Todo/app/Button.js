import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Button = ({ submit }) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight
            underlayColor='#efefef'
            style={styles.button}
            onPress={submit}>                
                <Text style={styles.submit}>
                    SUBMIT
                </Text>
            </TouchableHighlight>
    </View>
)
const styles = StyleSheet.create ({
    buttonContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        paddingLeft:20,
        paddingRight: 20,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        backgroundColor: '#ffffff'
        
    },

    submit: {
        color: '#666666',
        fontWeight: '600'
    }
})
export default Button;