import React, { Component } from 'react'
import { View } from 'react-native'
import App from './App'
import PusherChatApp from './PusherChat'
import {
  List,
  ListItem,
  SideMenu
} from 'react-native-elements'

class AppRootContainer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <App />
    )
  }
}

export default AppRootContainer
