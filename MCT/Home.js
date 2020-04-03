import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react_native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style= {styles.firstContainer}>
                    <View style={styles.firstFuncContainer}> 홈 상단</View>
                </View>
                <View style={styles.secondContainer}>
                    <View style={styles.secondFuncContainer}> 홈 하단</View>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create ({
    container: {
        flex: 1
    },
    firstContainer: {
        flex: 1,
    },
    firstFuncContainer: {

    },
    secondContainer: {
        flex: 1,
    },
    secondFuncContainer: {

    }
})