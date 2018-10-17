import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native'
import styles from './Styles/DayTabHeaderStyle'

import Search from '../Images/Mine/Icons/search-icon.png'
import bell from '../Images/Mine/Icons/bell.png'

import HeaderReusable from '../Components/HeaderReusable'

export default class DayTabHeader extends Component {
  render () {
    return (
      <HeaderReusable style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>React</Text>
          <Text style={styles.text2}>Native</Text>
        </View>
        {/*<View>*/}
          {/*<Image style={styles.imageStyle}*/}
                 {/*source={Search} />*/}
          {/*/!*<Image style={styles.imageStyleBell}*!/*/}
                 {/*/!*source={bell}/>*!/*/}
        {/*</View>*/}
      </HeaderReusable>
    )
  }
}
