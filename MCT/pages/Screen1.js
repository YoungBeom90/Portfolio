import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Input extends Component  {
  render() { 
    return (
      <View style={styles.container}>
          <View style={styles.cardContainer}>
              <View style={styles.cardImageContainer}>
                  <Image style={styles.cardImage} source={require('./user_icon.png')} />
              </View>
          </View>
      </View>
    );
  }
}

const profileCardColor = '#c6e2ff';

const styles= StyleSheet.create ({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 200,
    height: 300
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    width: 150,
    height: 150,
    borderRadius: 80,
    marginLeft: 22,
    marginTop: 30
  },
  cardImage: {
      width: 80,
      height: 110,
      marginLeft: 32,
      marginTop: 15
  }
});