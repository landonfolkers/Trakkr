import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AppRegistry, Modal } from 'react-native'
import Buttons from './components/Buttons'
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import { TabNavigator, createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MessagesForm from './components/MessagesForm'
import People from './components/People'
import Settings from './components/Settings'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.tabs}>
        <Buttons />
      </View>
    )
  }
}

class MessagesScreen extends React.Component {
   constructor(props) {
    super(props)
    this.state = { message1: '', message2: '', message3: '' }
  }

  render() {
    return (
      <View style={styles.tabs}>
        <MessagesForm />
      </View>
    )
  }
}

class PeopleScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { number1: '', number2: '', number3: '', number4: '', number5: '', }
  }

  render() {
    return (
      <View style={styles.tabs}>
        <People />
      </View>
    )
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Settings />
      </View>
    );
  }
}

export default createBottomTabNavigator({
    Home: HomeScreen,
    Messages: MessagesScreen,
    People: PeopleScreen,
    Settings: SettingsScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Messages') {
          iconName = `ios-chatboxes${focused ? '' : '-outline'}`;
        } else if (routeName === 'People') {
          iconName = `ios-people${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-settings${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'grey',
    },
  }
)

const styles = StyleSheet.create({
  tabs: {
    flex: 1,
  }
})