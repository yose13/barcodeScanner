import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class Instagram extends React.Component {
  render() {
  return (
    <View>
    <AppHeader/>
    <View style={styles.container}>
      <Text>Instagram</Text>
      </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:170
  },
});
