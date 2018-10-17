import React, { Component } from 'react'
import {StatusBar} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// import styles from './Styles/DayScreenStyle'

import DayTabHeader from '../Components/DayTabHeader'
import DayTabWallpaper from '../Components/DayTabWallpaper'
import DayTabsStats from '../Components/DayTabStats'
import HeaderReusable from '../Components/HeaderReusable'

class DayScreen extends Component {
  render () {
    return (
      <HeaderReusable>
        <DayTabHeader />
        <StatusBar translucent= {false}
                   backgroundColor='black'
                   barStyle= 'light-content' />
        <DayTabWallpaper />
        <DayTabsStats />
      </HeaderReusable>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayScreen)
