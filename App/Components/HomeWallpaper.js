import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native'

import styles from './Styles/HomeWallpaperStyle'
import letroncon from '../Images/Mine/letroncon.png'

export default class HomeWallpaper extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <ImageBackground blurRadius={2}
                       style={styles.imageBackground}
                       source={letroncon}>
        {this.props.children}
      </ImageBackground>
    )
  }
}
