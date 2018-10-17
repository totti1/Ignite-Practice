import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native'
import styles from './Styles/YearScreenFormStyle'

export default class YearScreenForm extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
                   placeholder='Say something ...'
                   placeholderTextColor='white'/>
        <TextInput style={styles.input}
                   placeholder='Tag people'
                   placeholderTextColor='white'/>
      </View>
    )
  }
}
