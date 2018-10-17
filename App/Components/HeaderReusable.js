import React, { Component } from 'react'
import {LinearGradient} from 'expo'
// import PropTypes from 'prop-types'
import styles from './Styles/HeaderReusableStyle'

export default class HeaderReusable extends Component {
  render () {
    return (
        <LinearGradient style={styles.linearGradient}
                        colors={['#a572fc', '#76bcf5']}>
          {this.props.children}
        </LinearGradient>
    )
  }
}
