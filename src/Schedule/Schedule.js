import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox
} from 'react-native-elements'

let styles = {}

class Schedule extends Component {
  // componentDidMount () {
  //   this.refs.form2.refs.textInputRef.focus()
  // }
  render () {
    return (
      <ScrollView style={{backgroundColor: 'white'}} keyboardShouldPersistTaps="always">
        <View style={styles.headingContainer}>
          <Icon color='white' name='today' size={62} />
          <Text style={styles.heading}>Scheduling</Text>
        </View>


      </ScrollView>
    )
  }
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
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  labelContainerStyle: {
    marginTop: 8
  }
})

export default Schedule

{/* <FormLabel
  containerStyle={styles.labelContainerStyle}>Name</FormLabel>
<FormInput
  ref='form2'
  containerRef='containerRefYOYO'
  textInputRef='textInputRef'
  placeholder='Please enter your name...'
/>
<FormLabel containerStyle={styles.labelContainerStyle}>Address</FormLabel>
<FormInput ref='form1' placeholder='Please enter your address...' />
<FormLabel containerStyle={styles.labelContainerStyle}>Phone</FormLabel>
<FormInput placeholder='Please enter your phone number...' /> */}
