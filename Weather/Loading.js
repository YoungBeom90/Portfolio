import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
/*
export default Loading = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.kyb}</Text>
            
        </View>        
    );
}
*/
export default class Loading extends Component {
    render() {
        return (
            <LinearGradient style={styles.container} colors={['#acb6e5', '#86fde8']}>
                <Text style={styles.text}>{this.props.text}</Text>
            </LinearGradient>        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 100,
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 45
    },
});
    

