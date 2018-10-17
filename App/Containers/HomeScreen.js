import React, { Component } from 'react'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import HomeWallpaper from '../Components/HomeWallpaper'
import HomeButton from '../Components/HomeButton'

class HomeScreen extends Component {
  render () {
    return (
      <HomeWallpaper>
        <HomeButton />
      </HomeWallpaper>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
