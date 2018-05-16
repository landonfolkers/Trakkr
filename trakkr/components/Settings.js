import React from 'react'
import { StyleSheet, Text, View, Button, Alert, AppRegistry, TouchableHighlight, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native'

export default class Settings extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} underlayColor="white">
                    <View>
                        <Text style={styles.buttonText}>Create a Login</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 35,
        color: 'white',
        fontFamily: 'Black Ops'
    }
})