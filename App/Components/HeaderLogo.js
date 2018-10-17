import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import {LinearGradient} from 'expo'

import styles from './Styles/HeaderLogoStyle'
import logoImg from '../Images/Mine/react-logo.png'

export default class HeaderLogo extends Component {
  render () {
    return (
      <View style={styles.container}>
        <LinearGradient style={styles.linearGradient}
                        colors={['#a572fc', '#76bcf5']}>
          <Image source={logoImg} style={styles.image} />
          <View style={styles.wrapper}>
            <Text style={styles.text}>React</Text>
            <Text style={styles.text2}>Native</Text>
          </View>
        </LinearGradient>
      </View>
    )
  }
}

