import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import styles from './Styles/HomeButtonStyle'

import LoginScreen from '../Containers/LoginScreen'

export default class HomeButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleModal}
                          style={styles.button}>
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.showModal}
          onRequestClose={this.toggleModal}>
          <LoginScreen screenProps={{ toggle: this.toggleModal }} />
        </Modal>
      </View>
    )
  }
}
