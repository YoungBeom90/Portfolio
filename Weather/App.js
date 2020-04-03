import React, { Component } from 'react';
import Loading from './Loading'; //loading screen
import * as Location from 'expo-location'; 
import { Alert } from 'react-native'; //failed alert
import axios from 'axios'; // json
import Weather from './Weather'; //design

const API_KEY = '9fd414ee30ce8682299fcc60713b2f70';
const TOKEN = '1fcf8f9e5919394583ea3be1e07e1bc669eb34c4';

export default class App extends Component {
  state = {isLoading: true};

  getWeather = async(latitude, longitude) => {
    const {
      data:{
        main:{temp},
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    console.log({temp,
      condition: weather[0].main});


    const {data} = await axios.get(
      `https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${TOKEN}`
    );

    console.log(data);
    this.setState({
      isLoading: false, 
      dust:data.data.iaqi.pm10.v,
      temp,
      condition : weather[0].main,
      
    });
  };

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("Can't find you", "So, sad");
    };
  };
  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoading, dust, temp, condition } = this.state;
    return isLoading ? <Loading text="Getting the Weather  :)" /> : <Weather temp={Math.round(temp)} condition={condition} dust={dust}/>; 
  };
}

  // getDust = async(latitude, longitude) => {
  //   const {data} =await axios.get(
  //     `https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${TOKEN}`
  //   );
  //   this.setState({
  //     isdustloading: false, dust : data.data.iaqi.v
  //   });
  // };