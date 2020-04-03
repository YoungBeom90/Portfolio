import React, { Component } from 'react';
import { View, Image,TouchableOpacity } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import { NavigationContainer } from '@react-navigation/native';



class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./image/drawer.jpg')}
            style={{ width: 25, height: 35, marginLeft: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const HomeStack = createStackNavigator();
const FirstStack = createStackNavigator();
const SecondStack = createStackNavigator();
const ThirdStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ gestureEnabled: false}}>
    <HomeStack.Screen
    name='Home'
    component={Home}
    options={ ({ navigation }) => ({
      headerTitle: null,
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#CCCCCC',
        
      },
      headerTintColor: '#000',
    })}
    />
  </HomeStack.Navigator>
)

const FirstStackScreen = () => (
  <FirstStack.Navigator screenOptions={{ gestureEnabled: false}}>
    <FirstStack.Screen
    name='First'
    component={Screen1}
    options={ ({ navigation }) => ({
      headerTitle: '사용자 프로필',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#CCCCCC',
      },
      headerTintColor: '#000',
    })}
    />
  </FirstStack.Navigator>
)

const SecondStackScreen = () => (
  <SecondStack.Navigator>
    <SecondStack.Screen
    name='Second'
    component={Screen2}
    options={ ({ navigation }) => ({
      headerTitle: '운행기록 엑셀 저장',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#CCCCCC',
      },
      headerTintColor: '#000',
    })}
    />
  </SecondStack.Navigator>
)

const ThirdStackScreen = () => (
  <ThirdStack.Navigator>
    <ThirdStack.Screen
    name='Third'
    component={Screen3}
    options={ ({ navigation }) => ({
      headerTitle: '설정',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#CCCCCC',
      },
      headerTintColor: '#000',
    })}
    />
  </ThirdStack.Navigator>
)

const Drawer = createDrawerNavigator();

export default class Input extends Component {

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen 
          name= 'Home' 
          component={HomeStackScreen}
          options={{ drawerLabel: '처음으로' }}
          />  
          <Drawer.Screen 
          name= 'Screen1' 
          component={FirstStackScreen}
          options={{ drawerLabel: '사용자 프로필' }}
          />

          <Drawer.Screen
          name= 'Screen2'
          component={SecondStackScreen}
          options={{ drawerLabel: '운행기록 엑셀 저장' }}
          />
          <Drawer.Screen
          name= 'Screen3'
          component={ThirdStackScreen}
          options={{ drawerLabel: '설정' }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}    