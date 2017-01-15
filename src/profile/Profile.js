import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Image, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'

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
           <Text style={styles.heading}>Steve Jones</Text>
              <Text style={styles.location}><Icon name='location-on' />Minneapolis, MN</Text>
              <Text>My fitness goal is: strength training</Text>
         </Col>
      </Grid>

        <Text style={styles.subheading}>
         Experience Level: Beginner
        </Text>

        <Text style={styles.subheading}>
         Bio:
        </Text>
        <Text style={styles.body}>
        Hi! I'm Steve and I'm new to the Minneapolis area.  I am hoping to find a personal trainer who can help me with general strength training.  I have never had a fitness plan.
         </Text>

         <Text style={styles.subheading}>
                  Activities:
         </Text>
         <Text style={styles.body}>
         Lifting, nutrition
        </Text>

        <Button
          containerStyle={{marginTop: 50}}
          raised
          icon={{name: 'edit', color: colors.fontPrimary}}
          backgroundColor= {colors.secondary}
          color={colors.fontPrimary}
          title='Edit'
        />

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
    color: '#3d3d3d',
    marginTop: 10,
    fontSize: 30
  },
  subheading: {
      color: '#3d3d3d',
      padding: 10,
      fontSize: 16,
      fontWeight: 'bold'
    },
  location: {
      padding: 10
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'white'
  },
    ratingImage: {
      height: 19.21,
      width: 100
    },
    body: {
        marginLeft: 15
    },
    activePlace: {
      marginLeft: 20,
      color: '#5cccf4',
      fontWeight: 'bold'
    },
  avatar: {
      borderRadius: 60,
      height: 120,
      width: 120
  }
})

export default Profile
