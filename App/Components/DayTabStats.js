import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/DayTabStatsStyle'

export default class DayTabStats extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>S</Text>
          <Text style={styles.title1}>T</Text>
          <Text style={styles.title2}>A</Text>
          <Text style={styles.title3}>T</Text>
          <Text style={styles.title4}>S</Text>
          <View style={styles.year}>
            <Text style={styles.yearText}>2018</Text>
          </View>
        </View>
        <View style={styles.monthView}>
          <Text style={styles.month}>NOVEMBER</Text>
          <Text style={styles.month1}>DECEMBER</Text>
          <Text style={styles.month2}>JANUARY</Text>
          <Text style={styles.month3}>FEBRUARY</Text>
        </View>
        <View style={styles.chart}>
          <View style={styles.purple}>
            <Text style={styles.purpleText}>890</Text>
            <Text style={styles.purpleText2}>Likes</Text>
          </View>
          <View style={styles.blue}>
            <Text style={styles.purpleText}>625</Text>
            <Text style={styles.purpleText2}>Followers</Text>
          </View>
        </View>
      </View>
    )
  }
}
