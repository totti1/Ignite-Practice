import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/MonthListStyle'

export default class MonthList extends Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>React</Text>
          <Text style={styles.headerText1}>Native</Text>
        </View>
        <Text style={styles.text}>FEED</Text>
        <Text style={styles.text}>LIST</Text>
        <Text style={styles.text}>ALBUMS</Text>
        <Text style={styles.text}>TIMELINE</Text>
        <Text style={styles.text}>COMPOSE</Text>
        <Text style={styles.text}>CAPTURE</Text>
        <Text style={styles.text}>PROFILE</Text>
        <Text style={styles.text}>STATS</Text>
        <Text style={styles.text}>DISCOVER</Text>
      </View>
    )
  }
}
