import React from 'react'
import { StyleSheet, Text, View, Button, Alert, AppRegistry, TouchableHighlight, Dimensions, Modal } from 'react-native'
import Font from 'expo'
import SendSMS from 'react-native-sms'

export default class Buttons extends React.Component {
  state = {
    fontLoaded: false,
    messages: [],
    numbers: []
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Black Ops': require('../assets/fonts/BlackOpsOne.ttf')
    })
    this.setState({ fontLoaded: true })
  }
  onPressButton = (level) => {
    Alert.alert(
      'Confirm ' + level + ' Alert?',
      '',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Confirm', onPress: () => console.log('Confirm Pressed') },
      ],
      { cancelable: true }
    )
  }

  sendMessages = () => {
    const url = 'http://10.0.0.180:3000/messages'
    fetch(url, {
      method: 'POST',
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        message: 'Hello',
        numbers: '+14028815965'
      })
    }).then(response => response.json())
      .catch(function (error) {
        console.log(error.message)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => this.sendMessages()} underlayColor="white">
          <View>
            {
              this.state.fontLoaded ? (
                <Text style={styles.buttonText}>Level 1</Text>
              ) : null
            }
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button2} onPress={() => this.onPressButton('Level 2')} underlayColor="white">
          <View>
            {
              this.state.fontLoaded ? (
                <Text style={styles.buttonText}>Level 2</Text>
              ) : null
            }
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button3} onPress={() => this.onPressButton('Level 3')} underlayColor="white">
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
  },
  button2: {
    flex: 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button3: {
    flex: 2,
    backgroundColor: '#DC143C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 75,
    color: 'white',
    fontFamily: 'Black Ops'
  }
})