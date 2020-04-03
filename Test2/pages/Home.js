import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const image= require('../image/homeTopImage.jpg')

export default class Home extends Component {
    

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.TopContainer}>
                    <ImageBackground source={image} style={styles.image}>
                        <TouchableOpacity 
                            underlayColor='#efefef'
                            style={styles.button}
                            onPress={()=> alert('Hello')}>
                            <Text style={styles.start}>
                                START
                            </Text>               
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.middleSection}>
                    <TouchableOpacity
                        underlayColor='#efefef'
                        style={styles.middleButton}
                    >
                        <Text>
                            2020년 4월 
                            <Image style={styles.checkicon} source={require('../image/checkmark.png')}/>
                        </Text>
                    </TouchableOpacity>
                    <View style={[styles.middleChecker, {position: 'absolute', right: 10, top: 8 }]}>
                        <Text style={{ color: '#9e1c1c', fontSize: 12, lineHeight: 16}}>
                            현재 운행기록이 없습니다.
                        </Text>
                    </View>
                </View>
                <ScrollView>
                    <View>
                        <Text style={{ flex: 0.5, fontSize: 23 }}> List </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff',
        width: 90,
        marginLeft: 130,
        marginTop: 110,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, .1)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    start:{
        color: '#ff0000',
        fontWeight: '600',
        textShadowRadius: 2,
    },
    TopContainer: {
        flex: 1,
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    checkicon:{
        width: 20,
        height: 20,
    },
    middleSection: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flex: 0.2,
        width: '100%',
        backgroundColor: '#8696a8',
    },
    middleButton:{
        top: 7,
        height: 30,
        backgroundColor: '#ffffff',
        width: 120,
        borderWidth: 1,
        borderColor: '#333333',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 20,
    },
    middleChecker: {
        width: '50%',
        borderLeftWidth: 1,
        borderColor: '#e5eaec',
        alignItems: 'center',
        marginLeft: 160,
        padding: 4,
    },
});