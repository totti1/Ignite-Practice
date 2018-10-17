import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import {LinearGradient} from 'expo'
import styles from './Styles/SignUpButtonStyle'

import TabNavigationScreen from '../Containers/TabNavigationScreen'
import Firebase from '../Components/Firebase'

export default class SignUpButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      email: '',
      password: ''
    }
    handleEmailChange = this.handleEmailChange.bind(this)
    handlePasswordChange = this.handlePasswordChange.bind(this)
  }
  handleEmailChange = (email) => {
    // This state change will force Profile component to be re-rendered
    this.setState({ email })
  }
  handlePasswordChange = (password) => {
    // This state change will force Profile component to be re-rendered
    this.setState({ password })
  }
  toggleModal = () => {
    // const {email, password} = this.state
    // Firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then((user) => {
    //     console.log(user)
    //     alert ('data inserted')
    //     // this.setState({error: '', loading: false});
    //   })
    //   .catch((error) => {
    //     const {code, message} = error
    //     console.log (error)
    //     alert ('nothing was inserted')
    //     // this.setState({error: 'Authentication failed.', loading: false});
    //   });
    this.setState({ showModal: !this.state.showModal })
  }
  render () {
    return (
      <View style={styles.container}>
        <LinearGradient style={styles.linearGradient}
                        colors={['#a572fc', '#76bcf5']}>
          <TouchableOpacity style={styles.button}
                            onPress={this.toggleModal}
                            activeOpacity={1} >
            <Text style={styles.text}>Next Step</Text>
          </TouchableOpacity>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <TabNavigationScreen screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </LinearGradient>
      </View>
    )
  }
}
// SignUpButton.propTypes = {
//   email: PropTypes.string,
//   password: PropTypes.string,
// }

// SignUpButton.defaultProps = {
//   email: '',
//   password: ''
// }
