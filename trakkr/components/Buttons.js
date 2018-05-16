import React from 'react'
import { StyleSheet, Text, View, Button, Alert, AppRegistry, TouchableHighlight, Dimensions } from 'react-native'
import { Font, Constants } from 'expo'

export default class Buttons extends React.Component {
  state = {
    fontLoaded: false,
    messages: ['Message 1', 'Message 2', 'Message 3'],
    numbers: [],
    alertMessage: '',
    ID: ''
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Black Ops': require('../assets/fonts/BlackOpsOne.ttf')
    })
    this.setState({ fontLoaded: true })
    this.setState({ ID: Expo.Constants.deviceId })
    const url = 'http://10.6.68.84:3000/numbers/' + this.state.ID
    fetch(url)
      .then(response => response.json())
      .then(numbers => {
        numbers.number.map((note) => {
          this.setState({ numbers: [note.number1, note.number2, note.number3, note.number4, note.number5] })
        })
      })
      const url2 = 'http://10.6.68.84:3000/messages/' + this.state.ID
      fetch(url2)
          .then(response => response.json())
          .then(messages => {
              messages.message.map((note) => {
                  this.setState({messages: [note.message1, note.message2, note.message3]})
              })
          })
  }

  onPressButton = (level) => {
    if (level === 'Level 1') {
      this.setState({ alertMessage: this.state.messages[0] })
    } else if (level === 'Level 2') {
      this.setState({ alertMessage: this.state.messages[1] })
    } else {
      this.setState({ alertMessage: this.state.messages[2] })
    }
    Alert.alert(
      'Confirm ' + level + ' Alert?',
      '',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Confirm', onPress: () => this.sendMessages() },
      ],
      { cancelable: true }
    )
  }

  sendMessages = () => {
    const url = 'http://10.6.68.84:3000/texts'
    fetch(url, {
      method: 'POST',
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        message: this.state.alertMessage,
        numbers: this.state.numbers
      })
    }).then(response => response.json())
      .catch(function (error) {
        console.log(error.message)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => this.onPressButton('Level 1')} underlayColor="white">
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
    )
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