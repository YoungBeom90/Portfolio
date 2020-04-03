import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Input extends Component  {
  render() { 
    return (
      <View style={styles.TopContainer}>
          <View style={styles.cardContainer}>
              <View style={styles.cardImageContainer}>
                  <Image style={styles.cardImage} source={require('./user.png')} />
              </View>
          </View>
          <View style={styles.BottomContainer}>
              <Text>운전자 : 김영범</Text>
              <Text>차종 : 투싼</Text>
              <Text>현재 운행거리 : 51265 km</Text>
          </View>
      </View>
    );
  }
}

const profileCardColor = '#c6e2ff';

const styles= StyleSheet.create ({
  TopContainer: {
    flex:1,
    marginTop: 30,
    alignItems: 'center',
  },
  cardContainer: {
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 38,
    backgroundColor: profileCardColor,
    width: 200,
    height: 200
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    width: 150,
    height: 150,
    borderRadius: 80,
    marginLeft: 22,
    marginTop: 22
  },
  cardImage: {
      width: 60,
      height: 80,
      marginLeft: 42,
      marginTop: 30
  },
  BottomContainer:{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  }
});