import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'

import Home from './home/HomeNav'
import Feed from './feed/FeedRootContainer'
import Message from './message/MessageRootContainer'
import Schedule from './Schedule/ScheduleRootContainer'
import Profile from './profile/ProfileRootContainer'
import TProfileNav from './trainerprofile/TProfileRootContainer'
import PusherChatApp from './PusherChat'

import { Tabs, Tab, Icon } from 'react-native-elements'

let styles = {}

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'home'
    }
    this.changeTab = this.changeTab.bind(this)
  }
  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }
  render () {
    const { selectedTab } = this.state
    return (

      <Tabs hidesTabTouch
        tabBarStyle={[{backgroundColor: '#5cccf4'}]}>
        <Tab
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'home'}
          title={selectedTab === 'home' ? 'HOME' : null}
          renderIcon={() => <Icon color={colors.white} name='home' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.secondary} name='home' size={26} />}
          onPress={() => this.changeTab('home')}>
          <Home />
        </Tab>

        <Tab
          tabStyle={selectedTab !== 'feed' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'feed'}
          title={selectedTab === 'feed' ? 'FEED' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.white} type='octicon' name='globe' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.secondary} type='octicon' name='globe' size={26} />}
          onPress={() => this.changeTab('feed')}>
          <Feed />
        </Tab>

        <Tab
          tabStyle={selectedTab !== 'message' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          containerStyle={[{backgroundColor: 'white'}, {borderRadius: 100}]}
          selected={selectedTab === 'message'}
          title={selectedTab === 'message' ? 'MESSAGE' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.white} name='message' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.secondary} name='message' size={26} />}
          onPress={() => this.changeTab('message')}>
          <Message />
        </Tab>

        <Tab
          tabStyle={selectedTab !== 'Schedule' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'Schedule'}
          title={selectedTab === 'Schedule' ? 'SCHEDULE' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.white} name='today' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.secondary} name='today' size={26} />}
          onPress={() => this.changeTab('Schedule')}>
          <Schedule />
        </Tab>

        <Tab
          tabStyle={selectedTab !== 'profile' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 8}]}
          selected={selectedTab === 'profile'}
          title={selectedTab === 'profile' ? 'PROFILE' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.white} name='account-circle' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.secondary} name='account-circle' size={26} />}
          onPress={() => this.changeTab('profile')}>
          <Profile />
        </Tab>

      </Tabs>

    )
  }
}

styles = StyleSheet.create({
  titleStyle: {
    color: colors.fontPrimary,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  },
  titleSelected: {
    color: colors.fontPrimary,
  }
})

export default App
