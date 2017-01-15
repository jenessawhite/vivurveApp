/**
 * @providesModule HSNavBar
 */

import React from 'react'
import { Platform, Navigator, StyleSheet, TouchableHighlight } from 'react-native'
import NavTitleComponent from 'HSNavTitleComponent'
import NavTitleIcon from 'HSNavTitleIcon'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

let styles = {}

const NavigationBar = () => {
  const src = require('../../images/logo.png')
  const LeftButton = () => {
    return null
  }

  const RightButton = (/* route, navigator, index, navState */) => {
    return null
  }

  const Title = () => {
    return (
      <NavTitleIcon src={src} />
    )
  }

  return (
    <Navigator.NavigationBar
      routeMapper={{
        LeftButton,
        RightButton,
        Title
      }}
      style={styles.navBar}
    />
  )
}

styles = StyleSheet.create({
  navBar: {
    height: 65,
    backgroundColor: "#5cccf4",
    ...Platform.select({
      android: {
        height: 55
      }
    })
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 10,
    ...Platform.select({
      android: {
        marginTop: 15
      }
    })
  }
})

export default NavigationBar
