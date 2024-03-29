import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native'
import colors from 'HSColors'
import Hyperlink from 'react-native-hyperlink'

import data from '../data/hello.json'

import {
  Button,
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
      <ScrollView style={styles.heading}>
        <View style={styles.container}>
            {
              articles.map((article, index) => {
                return (
                  <Card containerStyle={{marginTop: 15}} key={index}>
                    <Image
                      style={{width: 120, height: 120, alignSelf: 'center'}}
                      resizeMode='cover'
                      source={{uri: article.imageUrl}} />
                      <Text style={styles.headline, {marginBottom: 10}}>{article.headline}</Text>
                      <Text>By: {article.author}</Text>
                      <Text style={{marginBottom: 10}}>Published: {article.date}</Text>
                        <Button
                          iconRight
                          raised
                          icon={{name: 'forward', color: colors.fontPrimary}}
                          backgroundColor= {colors.secondary}
                          color={colors.fontPrimary}
                          title='Read Article'
                          onPress={ url => alert(url) }/>
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
    backgroundColor: 'white',
    marginTop: 60,
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
