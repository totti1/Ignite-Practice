import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native'
import styles from './Styles/SignUpWallpaperStyle'

import bckgd from '../Images/Mine/yosemite_ghost_clouds.png'

export default class SignUpWallpaper extends Component {
  render () {
    return (
      <ImageBackground blurRadius={1}
                       style={styles.imageBackground}
                       source={bckgd}>
        {this.props.children}
      </ImageBackground>
    )
  }
}
