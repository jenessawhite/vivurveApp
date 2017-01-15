import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Calendar from 'react-native-calendar'

import {
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox
} from 'react-native-elements'

let styles = {}

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
  }
})

export default Schedule
