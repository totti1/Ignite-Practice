import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { KeyboardAvoidingView } from 'react-native'
import styles from './Styles/LoginFormStyle'

import UserInput from './UserInput'
import usernameImg from '../Images/Mine/Icons/enveloppe.png'
import passwordImg from '../Images/Mine/Icons/lock.png'
// import eyeImg from '../Images/Mine/Icons/eye_black.png'

export default class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPass: true,
      press: false
    }
    this.showPass = this.showPass.bind(this)
  }

  showPass () {
    this.state.press === false ? this.setState({ showPass: false, press: true }) : this.setState({ showPass: true, press: false })
  }
  render () {
    return (
      <KeyboardAvoidingView behavior='padding'
                            style={styles.container}>
        <UserInput source={usernameImg}
                   iconStyle={styles.inlineImg}
                   style={styles.input}
                   placeholder='Email'
                   autoCapitalize={'none'}
                   returnKeyType={'done'}
                   autoCorrect={false} />
        <UserInput source={passwordImg}
                   iconStyle={styles.inlineImgPass}
                   style={styles.inputpass}
                   secureTextEntry={this.state.showPass}
                   placeholder='Password'
                   placeholderTextColor='#99A3A4'
                   returnKeyType={'done'}
                   autoCapitalize={'none'}
                   autoCorrect={false} />
        {/*<TouchableOpacity*/}
        {/*activeOpacity={0.7}*/}
        {/*style={styles.btnEye}*/}
        {/*onPress={this.showPass}*/}
        {/*>*/}
        {/*/!*<Image source={eyeImg} style={styles.iconEye} />*!/*/}
        {/*</TouchableOpacity>*/}
      </KeyboardAvoidingView>
    )
  }
}
