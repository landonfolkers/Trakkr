import React from 'react'
import { StyleSheet, Text, View, Button, Alert, AppRegistry, TouchableHighlight, Dimensions, TextInput } from 'react-native'
import SavedMessages from './SavedMessages'

export default class MessagesForm extends React.Component {
    state = {
        message1: '',
        message2: '',
        message3: ''
    }

    handleSubmit = () => {
        console.log(this.state.message1)
    }

    render() {
        return (
            <View style={styles.messagesSection}>
                <View>
                    <Text style={styles.label}>Level 1</Text>
                    <TextInput
                        style={styles.texts}
                        onChangeText={(message1) => this.setState({ message1 })}
                        value={this.state.message1}
                    />
                    <Button
                        title="Save"
                        onPress={this.handleSubmit}
                        color='green'
                    />
                    <Text style={styles.label}>Level 2</Text>
                    <TextInput
                        style={styles.texts}
                        onChangeText={(message2) => this.setState({ message2 })}
                        value={this.state.message2}
                    />
                    <Button
                        title="Save"
                        onPress={this.handleSubmit}
                        color='blue'
                    />
                    <Text style={styles.label}>Level 3</Text>
                    <TextInput
                        style={styles.texts}
                        onChangeText={(message3) => this.setState({ message3 })}
                        value={this.state.message3}
                    />
                    <Button
                        title="Save"
                        onPress={this.handleSubmit}
                        color='#DC143C'
                    />
                </View>
                <View style={styles.savedMessages}>
                    <SavedMessages message1={this.state.message1} message2={this.state.message2} message3={this.state.message3} />
                </View>
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
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        margin: 10
    },
    label: {
        fontFamily: 'Black Ops',
        fontSize: 20,

    }

})