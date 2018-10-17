import React, { Component } from 'react'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/SignUpScreenStyle'

import SignUpWallpaper from '../Components/SignUpWallpaper'
import SignUpForm from '../Components/SignUpForm'
import SignUpButton from '../Components/SignUpButton'
import SignUpPhoto from '../Components/SignUpPhoto'
import SignUpHeader from '../Components/SignUpHeader'

class SignUpScreen extends Component {
  render () {
    return (
      <SignUpWallpaper>
        <SignUpHeader />
        <SignUpPhoto />
        <SignUpForm />
        <SignUpButton />
      </SignUpWallpaper>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
