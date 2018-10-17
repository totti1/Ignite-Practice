import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Text } from 'react-native'
import styles from './Styles/YearScreenFooterStyle'

import camera from '../Images/Mine/camera.png'

export default class YearScreenFooter extends Component {
  render () {
    return (
      <View style={styles.container}>
        {/*<Image style={styles.imageStyle}*/}
               {/*source={camera} />*/}
        <View style={styles.button}>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.text}>SHARE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postButton}>
            <Text style={styles.text}>POST</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
