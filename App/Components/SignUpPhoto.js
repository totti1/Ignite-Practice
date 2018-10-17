import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Image } from 'react-native'
import styles from './Styles/SignUpPhotoStyle'

import people from '../Images/Mine/people.png'

export default class SignUpPhoto extends Component {
  render () {
    return (
      <Image style={styles.image}
             source={people} />
    )
  }
}
