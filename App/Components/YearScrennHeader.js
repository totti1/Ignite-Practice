import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/YearScrennHeaderStyle'

export default class YearScrennHeader extends Component {
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
      <View style={styles.container}>
        <Text style={styles.text}>C</Text>
        <Text style={styles.text}>O</Text>
        <Text style={styles.text}>M</Text>
        <Text style={styles.text}>P</Text>
        <Text style={styles.text}>O</Text>
        <Text style={styles.text}>S</Text>
        <Text style={styles.text}>E</Text>
      </View>
    )
  }
}
