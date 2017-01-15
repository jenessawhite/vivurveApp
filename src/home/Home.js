import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform } from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'
import trainers from './fakeUsers.json'

import {   Text,   Button,   SearchBar,   List,   ListItem,   Card } from 'react-native-elements'

let styles = {}

let arrayOfTrainers = trainers.trainerList

const log = () => {
  console.log(arrayOfTrainers[2].firstName)
}

const list = [   {     name: 'Amy Farha',     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',     subtitle: 'Vice President'   },   {     name: 'Chris Jackson',     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',     subtitle: 'Vice Chairman'   } ]

class Home extends Component {

  constructor(props) {
    super(props);
  }
  render () {
    return (
    <View style={{backgroundColor: 'white', marginTop: 70, marginBottom: 0}}>
      <View>
        <SearchBar lightTheme placeholder='Enter a trainer name, location, or specialty' />
      </View>
      <ScrollView style={{backgroundColor: 'white', marginTop: 10, marginBottom: 0}}>

      <Text h4> Recommended Trainers </Text>

      <List containerStyle={{marginBottom: 20}}>
        {
          arrayOfTrainers.map((l, i) => (
            <View key={i}>
                <ListItem
                roundAvatar
                avatar={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                title={l.firstName + ' ' + l.lastName}
                subtitle={l.trainingAreas[0].area}
                rightIcon={{name:'check-circle'}}
                />
            </View>
          ))
        }
      </List>
      </ScrollView>
    </View>
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
