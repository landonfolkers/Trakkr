import React from 'react'
import { StyleSheet, Text, View, Button, Alert, AppRegistry, TouchableHighlight, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native'
import Constants from 'expo'

export default class MessagesForm extends React.Component {
    state = {
        message1: '',
        message2: '',
        message3: '',
        ID: '',
    }

    handleSubmit = (event) => {
        const url = 'http://10.6.68.84:3000/messages/' + this.state.ID
        fetch(url, {
            method: 'PUT',
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify({
                identity: this.state.ID,
                message1: this.state.message1,
                message2: this.state.message2,
                message3: this.state.message3
            })
        }).then(response => response.json())
            .catch(function (error) {
                console.log(error.message)
            })
    }

    componentWillMount = () => {
        this.setState({ ID: Expo.Constants.deviceId })
    }

    componentDidMount = () => {
        console.log(this.state.ID)
        const url = 'http://10.6.68.84:3000/messages/' + this.state.ID
        fetch(url)
            .then(response => response.json())
            .then(messages => {
                messages.message.map((note) => {
                    this.setState({message1: note.message1})
                    this.setState({message2: note.message2})
                    this.setState({message3: note.message3})
                })
            })
    }

    render() {
        return (
            <View style={styles.messagesSection}>
                <KeyboardAvoidingView behavior="padding" enabled>
                <View>
                    <Text style={styles.label}>Level 1</Text>
                    <TextInput
                        style={styles.texts}
                        ref={input => { this.textInput = input }}
                        onChangeText={(message1) => this.setState({ message1 })}
                        onSubmitEditing={this.handleSubmit}
                        value={this.state.message1}
                    />
                    <Text style={styles.label}>Level 2</Text>
                    <TextInput
                        style={styles.texts}
                        ref={input => { this.textInput2 = input }}
                        onChangeText={(message2) => this.setState({ message2 })}
                        onSubmitEditing={this.handleSubmit}
                        value={this.state.message2}
                    />
                    <Text style={styles.label}>Level 3</Text>
                    <TextInput
                        style={styles.texts}
                        ref={input => { this.textInput3 = input }}
                        onChangeText={(message3) => this.setState({ message3 })}
                        onSubmitEditing={this.handleSubmit}
                        value={this.state.message3}
                    />
                    <Button
                        title="Save"
                        onPress={this.handleSubmit}
                        color='#DC143C'
                    />
                </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    messagesSection: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginTop: 30
    },
    savedMessages: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texts: {
        height: 30,
        margin: 10
    },
    label: {
        fontFamily: 'Black Ops',
        fontSize: 20,

    }

})