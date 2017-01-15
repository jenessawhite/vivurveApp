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
      style={{backgroundColor: 'white'}}
      enableEmptySections={true}>
        <View style={styles.headingContainer}>
          <Icon color='white' name='message' size={62} />
          <Text style={styles.heading}>Messages</Text>
        </View>
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
  headingContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.grey2
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  }
})

export default Message
