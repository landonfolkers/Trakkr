import React from 'react'
import { StyleSheet, Text, View, Button, Alert, AppRegistry, TouchableHighlight, Dimensions, TextInput } from 'react-native'

export default class MessagesForm extends React.Component {
    state = {
        numbers: []
    }
    render() {
        return (
            <View style={styles.people}>
                <Text style={styles.label}>People</Text>
                    <Text style={styles.label}>#1</Text>
                    <TextInput
                        style={styles.numbers}
                        onChangeText={(number1) => this.setState({ numbers: number1 })}
                        value={this.state.numbers.number1}
                    />
                    <Text style={styles.label}>#2</Text>
                <TextInput
                    style={styles.numbers}
                    onChangeText={(number2) => this.setState({ numbers: number2 })}
                    value={this.state.numbers.number2}
                />
                <Text style={styles.label}>#3</Text>
                <TextInput
                    style={styles.numbers}
                    onChangeText={(number3) => this.setState({ numbers: number3 })}
                    value={this.state.numbers.number3}
                />
                <Text style={styles.label}>#4</Text>
                <TextInput
                    style={styles.numbers}
                    onChangeText={(number4) => this.setState({ numbers: number4 })}
                    value={this.state.numbers.number4}
                />
                <Text style={styles.label}>#5</Text>
                <TextInput
                    style={styles.numbers}
                    onChangeText={(number5) => this.setState({ numbers: number5 })}
                    value={this.state.numbers.number5}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    numbers: {
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        margin: 10
    },
    label: {
        fontFamily: 'Black Ops',
        fontSize: 20,
    },
    people: {
        marginTop: 30,
    },
    phone: {
        flexDirection: 'row',
    
    }

})