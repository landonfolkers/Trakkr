import React from 'react'
import { StyleSheet, Text, View, Button, Alert, AppRegistry, TouchableHighlight, Dimensions, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'

export default class People extends React.Component {
    state = {
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        number5: '',
    }

    handleSubmit = (event) => {
        this.textInput.clear()
        this.textInput2.clear()
        this.textInput3.clear()
        this.textInput4.clear()
        this.textInput5.clear()
        console.log(this.state)
    }

    render() {
        return (
            <View style={styles.people}>
            <KeyboardAvoidingView behavior="position" enabled>
                    <Text style={styles.label}>People</Text>
                    <Text style={styles.label}>#1</Text>
                    <TextInput
                        style={styles.numbers}
                        ref={input => { this.textInput = input }}
                        onChangeText={(number1) => this.setState({ number1 })}
                        onSubmitEditing={this.handleSubmit}
                        value={this.state.number1}
                    />
                    <Text style={styles.label}>#2</Text>
                    <TextInput
                        style={styles.numbers}
                        ref={input => { this.textInput2 = input }}
                        onChangeText={(number2) => this.setState({ number2 })}
                        onSubmitEditing={this.handleSubmit}
                        value={this.state.number2}
                    />
                    <Text style={styles.label}>#3</Text>
                    <TextInput
                        style={styles.numbers}
                        ref={input => { this.textInput3 = input }}
                        onChangeText={(number3) => this.setState({ number3 })}
                        onSubmitEditing={this.handleSubmit}
                        value={this.state.number3}
                    />
                    <Text style={styles.label}>#4</Text>
                    <TextInput
                        style={styles.numbers}
                        ref={input => { this.textInput4 = input }}
                        onChangeText={(number4) => this.setState({ number4 })}
                        onSubmitEditing={this.handleSubmit}
                        value={this.state.number4}
                    />
                    <Text style={styles.label}>#5</Text>
                    <TextInput
                        style={styles.numbers}
                        ref={input => { this.textInput5 = input }}
                        onChangeText={(number5) => this.setState({ number5 })}
                        onSubmitEditing={this.handleSubmit}
                        value={this.state.number5}
                    />
                    <Button
                        title="Save"
                        onPress={this.handleSubmit}
                        color='#DC143C'
                    />
            </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    numbers: {
        height: 40,
        margin: 10
    },
    label: {
        fontFamily: 'Black Ops',
        fontSize: 20,
    },
    people: {
        marginTop: 30,
        flex: 1
    }
})