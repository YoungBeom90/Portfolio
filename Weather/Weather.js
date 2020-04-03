import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import propTypes from 'prop-types'; //부모 속성을 가져옴
import { MaterialCommunityIcons } from '@expo/vector-icons'; //아이콘
import { LinearGradient } from 'expo-linear-gradient'; //배경 효과

const weatherOptions = {
    Clear: {
        iconName: "weather-sunny",
        text: "산책하기 좋은 날씨에요 :)",
        textColor: "white",
        gradient: ["#fc4a1a","#f7b733"]
    },
    Haze: {
        iconName: "weather-fog",
        text: "안개가 많아요. 안전운전!  :(",
        textColor: "white",
        gradient: ["#485563","#ffffff"]
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        text: "천둥번개를 동반한 비가내려요! 조심! :(",
        textColor: "white",
        gradient: ["#373B44","#4286f4"]
    },
    Drizzle: {
        iconName: "weather-rainy",
        text: "이슬비가 내려요, 혹시 모르니 우산 챙기세요!  :(",
        textColor: "white",
        gradient: ["#659999","#f4791f"]
    }, 
    Rain: {
        iconName: "weather-pouring",
        text: "비오는날이에요. 우산 꼭 챙기세요!  :(",
        textColor: "white",
        gradient: ["#616161","#9bc5c3"]
    }, 
    Snow: {
        iconName: "weather-hail",
        text: "눈이 내려요!!  :)",
        textColor: "white",
        gradient: ["#C9D6FF","#E2E2E2"]
    },
    Atmosphere: {
        iconName: "weather-sunset",
        text: "외출하기 좋은 날씨에요~  :)",
        textColor: "white",
        gradient: ["#659999","#f4791f"]
    }, 
    Clouds: {
        iconName: "weather-cloudy",
        text: "구름이 많아요.  :)",
        textColor: "white",
        gradient: ["#525252","#3d72b4"]
    }, 
    Dust: {
        iconName: "weather-windy",
        text: "미세먼지가 많네요..  :(",
        textColor: "white",
        gradient: ["#659999","#f4791f"]
    },  
    Mist: {
        iconName: "weather-fog",
        text: "안개가 많아요. 안전운전!  :(",
        textColor: "white",
        gradient: ["#485563","#ffffff"]
    }
}; //날씨에 따라 아이콘과 배경색변경


export default function Weather ({temp, condition, dust}){    
    const _option = weatherOptions[condition];

    return <LinearGradient 
            colors={_option.gradient} 
            style={styles.container}>
                {/* <StatusBar barStyle="light-content"/> */}
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons name={_option.iconName} size={96} color='white' />
                <Text style={{ color:_option.textColor, ...styles.text }}> {temp} ℃ </Text>
            </View>
            <View>
                <Text style={{ color:_option.textColor, ...styles.text }}>미세먼지 농도</Text>
                <Text style={{ color:_option.textColor, ...styles.text }}> {dust} PM</Text>
            </View>
            <View style={styles.halfcontainer}>
                <Text style={styles.text}> {_option.text}  </Text>
            </View>
           </LinearGradient>
           
}

Weather.propTypes = {
    dust: propTypes.number.isRequired,
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
        fontSize: 30,
        textAlign: 'center',
    }
})

