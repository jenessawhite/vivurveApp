import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Calendar from 'react-native-calendar'

import {
  Button,
  List,
  ListItem,
  Text,
  Image,
  FormInput,
  FormLabel,
  CheckBox
} from 'react-native-elements'

let styles = {}

const list = [
  // {
  // name: 'Amy Farha',
  // avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  // subtitle: 'Vice President'
  // },
  // {
  //   name: 'Chris Jackson',
  //   avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  //   subtitle: 'Vice Chairman'
  // },
  {
    date:'2017-01-15',
    trainer: 'Todd',
    focus: 'Dance - 2017-01-15'
  },
  {
    date:'2017-01-21',
    trainer: 'Jane',
    focus: 'Swimming - 2017-01-21'
  },
  {
    date:'2017-02-15',
    trainer: 'Jane',
    focus: 'Swimming - 2017-02-15'
  },
  {
    date:'2017-02-21',
    trainer: 'Todd',
    focus: 'Dance - 2017-02-21'
  },
]

class Schedule extends Component {
  render () {
    return (
      <ScrollView style={styles.heading} keyboardShouldPersistTaps="always">
        <Text>See your upcoming appointments below</Text>
        <View style={styles.calendar}>
          <Calendar
            showEventIndicators
            customStyle={customStyle} // Customize any pre-defined styles
            dayHeadings={['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
            eventDates={['2017-01-07', '2017-01-14', '2017-01-15', '2017-01-21']}       // Optional array of moment() parseable dates that will show an event indicator
            events={[{date:'2017-01-07'}, {date:'2017-01-14'}, {date:'2017-01-15'}, {date:'2017-01-21'}]}// Optional array of event objects with a date property and custom styles for the event indicator
            onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event
            onSwipePrev={this.onSwipePrev}    // Callback for back swipe event
            onTouchNext={this.onTouchNext}    // Callback for next touch event
            onTouchPrev={this.onTouchPrev}    // Callback for prev touch event
            scrollEnabled={true}              // False disables swiping. Default: False
            showControls={true}               // False hides prev/next buttons. Default: False
            showEventIndicators={true}        // False hides event indicators. Default:False
            weekStart={0} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
          />
        </View>
        <Text h4> My Upcoming Appointments</Text>
        <ScrollView>
          <List containerStyle={{marginBottom: 20}}>
            {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  title={l.focus}
                  subtitle={l.trainer}
                />
              ))
            }
          </List>
        </ScrollView>
      </ScrollView>
    )
  }
}

const customStyle = {
    day: {
      color: colors.dkGreyBg,
      fontSize: 15,
      textAlign: 'center',
    },
    calendarControls: {
      backgroundColor: 'white',
    },
    calendarHeading: {
      backgroundColor: 'white',
    },
    hasEventCircle: {
      backgroundColor: colors.primary,
    },
    weekendHeading: {
      color: colors.dkGreyBg,
    },
    weekendDayText: {
      color: colors.dkGreyBg,
    },
    currentDayText: {
      color: colors.dkGreyBg,
    },
    currentDayCircle: {
      backgroundColor: colors.secondary,
    },
    selectedDayCircle: {
      backgroundColor: colors.secondary,
    },
  }

styles = StyleSheet.create({
  subtitleView: {
  flexDirection: 'row',
  paddingLeft: 10,
  paddingTop: 5
},
ratingImage: {
  height: 19.21,
  width: 100
},
ratingText: {
  paddingLeft: 10,
  color: 'grey'
},
  headingContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.secondary2
  },
  heading: {
    backgroundColor: 'white',
    marginTop: 70,
  },
  labelContainerStyle: {
    marginTop: 8
  },
  calendar: {
    alignSelf: 'center',
    height: 300,
  }
})

export default Schedule
