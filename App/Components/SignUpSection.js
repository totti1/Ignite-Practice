import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import styles from './Styles/SignUpSectionStyle'

import SignUpScreen from '../Containers/SignUpScreen'

export default class SignUpSection extends Component {
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
        <TouchableOpacity onPress={this.toggleModal}>
          <Text style={styles.text}>New Account</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.showModal}
          onRequestClose={this.toggleModal}>
          <SignUpScreen screenProps={{ toggle: this.toggleModal }} />
        </Modal>
      </View>
    )
  }
}
