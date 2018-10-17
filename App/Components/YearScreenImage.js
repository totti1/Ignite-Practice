import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/YearScreenImageStyle'

import Black from '../Images/Mine/lion.png'

export default class YearScreenImage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.image}
               source={Black} />
        <Text style={styles.text}>EDIT</Text>
      </View>
    )
  }
}
