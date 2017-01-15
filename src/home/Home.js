import React, { Component } from 'react'
import { ScrollView, Image, View, StyleSheet, TextInput, Platform } from 'react-native'
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


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      trainers: arrayOfTrainers
    }
  }

  onNewSearch(searchValue) {
    let trainers;
    if (searchValue === '') {
      trainers= arrayOfTrainers
    } else {
      trainers = arrayOfTrainers.filter((v,i) => {
        return (
          (v.firstName.toLowerCase() + " " + v.lastName.toLowerCase() + " " + v.trainingAreas[0].area.toLowerCase()).indexOf(searchValue.toLowerCase()) > -1
        )
      })
    }
    this.setState({
      searchValue,
      trainers
    })
  }
  render () {
    return (
    <View style={{backgroundColor: 'white', marginTop: 70, marginBottom: 0}}>
      <View style={{marginTop: 0}}>
        <SearchBar
          lightTheme
          placeholder='Enter a trainer name, location, or specialty'
          onChangeText={this.onNewSearch.bind(this)}
          autoCorrect={false}
          value={this.state.searchValue}
        />
      </View>
      <View>
        <Text h4> Recommended Trainers </Text>
        <ScrollView style={{backgroundColor: 'white', marginTop: 10, marginBottom: 0}}>
          <List containerStyle={{marginBottom: 20}}>
            {
              this.state.trainers.map((trainer, i) => (
                <View key={i}>
                    <ListItem
                    roundAvatar
                    avatar={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                    title={trainer.firstName + ' ' + trainer.lastName}
                    subtitle={trainer.trainingAreas[0].area}
                    rightIcon={{name:'check-circle'}}
                    />
                </View>
              ))
            }
          </List>
        </ScrollView>
      </View>
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
