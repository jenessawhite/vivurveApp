import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Text,
  Card,
  SocialIcon,
  Divider,
  ButtonGroup,
  List, ListItem
} from 'react-native-elements'

import * as RNElements from 'react-native-elements'

let styles = {}

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'thot leader',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'
  },
  {
    name: 'jsa',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg'
  },
  {
    name: 'andy vitale',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg'
  },
  {
    name: 'katy friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
  }
]

class Feed extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  render () {
    const { selectedIndex } = this.state
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.headerContainer}>
          <Icon color='white' name='invert-colors' size={62} />
          <Text style={styles.heading}>Feed</Text>
        </View>
        <View style={styles.container}>
            {
              users.map((u, i) => {
                return (
                  <Card containerStyle={{marginTop: 15}} title='Article' key={i} style={styles.user}>
                    <View key={i} style={styles.user}>
                      <Image
                        style={styles.image}
                        resizeMode='cover'
                        source={{uri: u.avatar}} />
                      <Text style={styles.name}>{u.name}</Text>
                    </View>
                  </Card>
                )
              })
            }
          <Card containerStyle={{marginTop: 15}} title='Article'>
            <Image source={require('../images/rating.png')} style={styles.ratingImage}/>
<Text style={styles.fonts}>Preview Text</Text>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 15,
    width: 75
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },
  container: {
    flex: 1
  },
  headerContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  fonts: {
    marginBottom: 8
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default Feed
