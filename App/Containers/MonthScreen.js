import React, { Component } from 'react'
import {StatusBar, View} from 'react-native'
import {LinearGradient} from 'expo'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import DayTabHeader from '../Components/DayTabHeader'
import MonthList from '../Components/MonthList'
import HeaderReusable from '../Components/HeaderReusable'
import styles from "../Components/Styles/HeaderReusableStyle";

class MonthScreen extends Component {
  render () {
    return (
      <LinearGradient style={styles.linearGradient}
                      colors={['#a572fc', '#76bcf5']}>
      {/*<HeaderReusable>*/}
        {/*<DayTabHeader />*/}
        <StatusBar translucent= {false}
                   backgroundColor='black'
                   barStyle= 'light-content' />
        <MonthList />
      </LinearGradient>
      // </HeaderReusable>
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

export default connect(mapStateToProps, mapDispatchToProps)(MonthScreen)
