import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/SignUpHeaderStyle'

import close from '../Images/Mine/Icons/closebutton.png'

export default class SignUpHeader extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>React</Text>
        <Text style={styles.textBottom}>Native</Text>
        <Image style={styles.iconImage}
               source={close} />
      </View>
    )
  }
}
