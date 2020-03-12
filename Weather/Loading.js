import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff66',
        paddingHorizontal: 30,
        paddingVertical: 100,
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 30
    }
});

