import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/LoginButtonStyle'



import play from '../Images/Mine/play.png'

export default class LoginButton extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}
                          onPress={this._onPress}
                          activeOpacity={1} >
          <Image style={styles.image}
                 source={play} />
        </TouchableOpacity>
      </View>
    )
  }
}
