import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import propTypes from 'prop-types'; //부모 속성을 가져옴
import { MaterialCommunityIcons } from '@expo/vector-icons'; //아이콘
import { LinearGradient } from 'expo-linear-gradient'; //배경 효과

const weatherOptions = {
    Clear: {
        iconName: "weather-sunny",
        text: "산책하기 좋은 날씨에요 :)",
        gradient: ["#fc4a1a","#f7b733"]
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#659999","#f4791f"]
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#373B44","#4286f4"]
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#659999","#f4791f"]
    }, 
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#7F7FD5","#86A8E7","#91EAE4"]
    }, 
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#D3CCE3","#E9E4F0"]
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#659999","#f4791f"]
    }, 
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#ADA996","#F2F2F2","#DBDBDB","#EAEAEA"]
    }, 
    Dust: {
        iconName: "weather-hail",
        gradient: ["#659999","#f4791f"]
    },  
    Mist: {
        iconName: "weather-hail",
        gradient: ["#659999","#f4791f"]
    }
}; //날씨에 따라 아이콘과 배경색변경

export default function Weather ({temp, condition}){    
    const _option = weatherOptions[condition];

    return <LinearGradient 
            colors={_option.gradient} 
            style={styles.container}>
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons name={_option.iconName} size={96} color="white" />
                <Text style={styles.text}>{temp} ℃</Text>
            </View>
            <View style={styles.halfcontainer}>
                <Text>{_option.text}</Text>
            </View>
           </LinearGradient>
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm","Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Dust", "Haze", "Mist"]).isRequired
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 35,
        color: 'white'
    }
})

