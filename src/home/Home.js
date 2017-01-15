import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform } from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {   Text,   Button,   SearchBar,   List,   ListItem,   Card } from 'react-native-elements'

let styles = {}

const log = () => {
  console.log('hello!')
}

const list = [   {     name: 'Amy Farha',     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',     subtitle: 'Vice President'   },   {     name: 'Chris Jackson',     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',     subtitle: 'Vice Chairman'   } ]

class Home extends Component {

  constructor(props) {
    super(props);
  }
  render () {
    return (
      <ScrollView style={{backgroundColor: 'white', marginTop: 60, marginBottom: 0}}>
      <View>
        <SearchBar lightTheme placeholder='Enter a trainer name, location, or specialty' />
      </View>
      <Text style={styles.fonts} h4> Recommended Trainers </Text>

      <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <View key={i}>
                <ListItem
                roundAvatar
                avatar={{uri:l.avatar_url}}
                title={l.name}
                rightIcon={{name:'check-circle'}}
                />
            </View>
          ))
        }
      </List>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2
  },
  titleContainer: {
  },
  button: {
    marginTop: 15
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default Home
