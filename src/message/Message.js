import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PusherChatApp from '../PusherChat'
import { Text } from 'react-native-elements'

let styles = {}

class Message extends Component {
  render () {
    return (
      <ScrollView
      style={styles.heading}
      enableEmptySections={true} >
        <View style={styles.container}>
          <PusherChatApp />
        </View>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    margin: 15
  },
  heading: {
    backgroundColor: 'white',
    marginTop: 60,
  }
})

export default Message
