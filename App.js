import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Instagram from './Screens/Instagram';
import Facebook from './Screens/Facebook';

export default class App extends React.Component {
  render() {
  return (
      <AppContainer/>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
})

const AppContainer = createAppContainer(TabNavigator);