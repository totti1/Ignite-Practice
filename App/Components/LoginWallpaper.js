import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native'

import styles from './Styles/LoginWallpaperStyle'
import BeachPhoto from '../Images/Mine/gunung-batur.png'

export default class LoginWallpaper extends Component {
  render () {
    return (
      <ImageBackground blurRadius={1}
                       style={styles.imageBackground}
                       source={BeachPhoto}>
        {this.props.children}
      </ImageBackground>
    )
  }
}
