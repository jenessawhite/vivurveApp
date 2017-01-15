import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Image, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let styles

import {
  Card,
  Button,
  List,
  ListItem,
  Grid,
  Row,
  Col,
  Text
} from 'react-native-elements'

const log = () => console.log('this is an example method')

class Profile extends Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.renderRow = this.renderRow.bind(this)
  }
  renderRow (rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={log}
        title={rowData.title}
        icon={{name: rowData.icon}}
      />
    )
  }
  render () {
    return (
      <ScrollView keyboardShouldPersistTaps="always" style={{marginTop: 60}}>
      <Grid>
        <Col style={{width: 150}}><View style={styles.hero}>
            <Image source={require('../images/avatar1.jpg')} style={styles.avatar}/>
             </View>
        </Col>
        <Col style={{marginTop: 20}}>
           <Text style={styles.heading}>Firstname Lastname</Text>
           <Text>Minneapolis, MN</Text>
           <Text>My fitness goal is</Text>
           <Text>Weight training, strength training, conditioning</Text>
         </Col>
      </Grid>

        <Card title='My Fitness Goal is...'>
          <Text style={{marginBottom: 10}}>
            I want to be able to do a pull up
          </Text>
        </Card>

        <Card title='Activities'>
          <Text>
            Boxing - beginner
          </Text>
        </Card>

        <Card title='Bio'>
          <Text style={{marginBottom: 10}}>
            Info about me
          </Text>
        </Card>

        <Card>
         <Button
            icon={{name: 'mode-edit'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Edit' />
        </Card>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1'
  },
  container: {
    marginTop: 60
  },
  heading: {
    color: 'black',
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'white'
  },
  avatar: {
      borderRadius: 50,
      height: 100,
      width: 100
  }
})

export default Profile
