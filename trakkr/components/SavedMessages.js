import React from 'react'
import { StyleSheet, Text, View, Button, Alert, AppRegistry, TouchableHighlight, Dimensions } from 'react-native'

export default function SavedMessages({ message1, message2, message3 }) {
    return (
        <View>
            <Text>Current Messages</Text>
            <Text>{message1}</Text>
            <Text>{message2}</Text>
            <Text>{message3}</Text>
        </View>

    )
}