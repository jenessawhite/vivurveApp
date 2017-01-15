import React, { Component } from 'react'
import { ScrollView, ListView, Image, View, StyleSheet } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'
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

class TProfile extends Component {
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
      <ScrollView keyboardShouldPersistTaps="always" style={{marginTop: 60, marginRight: 10}}>
      <Grid>
        <Col style={{width: 150}}><View style={styles.hero}>
            <Image source={require('../images/Headshots/avatar3.png')} style={styles.avatar}/>
             </View>
        </Col>
        <Col style={{marginTop: 20}}>
           <Text style={styles.heading}>Mike Jones   <Icon name='check-circle'  size={20}/></Text>
           <Image source={require('../images/rating.png')} style={styles.ratingImage}/>
           <Text style={styles.location}><Icon name='location-on' />Minneapolis, MN</Text>
           <Button backgroundColor='#ffd800'
 buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
 title="Contact Mike"/>
         </Col>
      </Grid>
          <Text style={styles.subheading}>Trains at: </Text>
          <Text style={styles.activePlace}>Gym | Outdoors | Your Place | Online</Text>

           <Text style={styles.subheading}>
                Training Focus
           </Text>
           <Text style={styles.body}>
            Weight training, strength training, conditioning
           </Text>

           <Text style={styles.subheading}>
            About Mike
           </Text>

           <Text style={styles.body}>
           Mike is a Certified Personal Trainer through the American Fitness Professionals and Associates (AFPA).  He received both his BS and MS degrees at The University of Minnesota.
           </Text>

          <Text style={styles.subheading}>
           Availability
          </Text>

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
      borderRadius: 50,
      height: 100,
      width: 100
  }
})
export default TProfile
