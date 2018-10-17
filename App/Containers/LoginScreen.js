import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View} from 'react-native'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import styles from './Styles/LoginScreenStyle'

import HeaderLogo from '../Components/HeaderLogo'
import LoginWallpaper from '../Components/LoginWallpaper'
import LoginForm from '../Components/LoginForm'
import LoginButton from '../Components/LoginButton'
import SignUpSection from '../Components/SignUpSection'

class LoginScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <LoginWallpaper>
          <HeaderLogo />
          <LoginForm />
          <LoginButton />
          <SignUpSection />
        </LoginWallpaper>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
