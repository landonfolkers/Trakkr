import React from 'react'
import { StyleSheet, Text, View, Button, Alert, AppRegistry, TouchableHighlight, Dimensions } from 'react-native'
import Font from 'expo'

export default class Buttons extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Black Ops': require('../assets/fonts/BlackOpsOne.ttf')
    })
    this.setState({ fontLoaded: true })
  }
  onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this.onPressButton} underlayColor="white">
          <View>
            {
              this.state.fontLoaded ? (
                <Text style={styles.buttonText}>Level 1</Text>
              ) : null
            }
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button2} onPress={this.onPressButton} underlayColor="white">
          <View>
            {
              this.state.fontLoaded ? (
                <Text style={styles.buttonText}>Level 2</Text>
              ) : null
            }
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button3} onPress={this.onPressButton} underlayColor="white">
          <View>
            {
              this.state.fontLoaded ? (
                <Text style={styles.buttonText}>Level 3</Text>
              ) : null
            }
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

var width = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: width,
  },
  button2: {
    flex: 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button3: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 75,
    color: 'white',
    fontFamily: 'Black Ops'
  }
})