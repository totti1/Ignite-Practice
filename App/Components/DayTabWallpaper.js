import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View } from 'react-native'
import styles from './Styles/DayTabWallpaperStyle'

export default class DayTabWallpaper extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          {this.props.children}
        </View>
      </View>
    )
  }
}
