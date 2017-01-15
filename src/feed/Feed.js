import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native'
import colors from 'HSColors'

import data from '../data/hello.json'

import {
  Text,
  Card,
  Icon,
  Divider,
  List, ListItem
} from 'react-native-elements'
import * as RNElements from 'react-native-elements'

let styles = {}

let articles = data.posts

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
              articles.map((article, index) => {
                return (
                  <Card containerStyle={{marginTop: 5}} key={index}>
                    <Text style={styles.headline}>{article.headline}</Text>
                    <View key={index} style={styles.user}>
                      <Image
                        style={{width: 100, height: 100}}
                        resizeMode='cover'
                        source={{uri: article.imageUrl}} />
                      <Text style={styles.name}>By: {article.author}</Text>
                    </View>
                  </Card>
                )
              })
            }
        </View>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
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
  headline: {
    fontSize:20,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
    fontStyle: 'italic'
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default Feed
