import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AppRegistry } from 'react-native';
import Buttons from './components/Buttons'
import { Font } from 'expo'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.title}>
      <Text>Trakkr</Text>
      <Buttons />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
