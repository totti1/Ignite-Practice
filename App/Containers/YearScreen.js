import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import DayTabHeader from '../Components/DayTabHeader'
import YearScreenHeader from '../Components/YearScrennHeader'
import YearScreenImage from '../Components/YearScreenImage'
import YearScreenForm from '../Components/YearScreenForm'
import YearScreenFooter from '../Components/YearScreenFooter'
import HeaderReusable from '../Components/HeaderReusable'

class YearScreen extends Component {
  render () {
    return (
      <HeaderReusable>
        <DayTabHeader />
        {/*<StatusBar translucent= {false}*/}
                   {/*backgroundColor='black'*/}
                   {/*barStyle= 'light-content' />*/}
        <YearScreenImage />
        <YearScreenHeader />
        <YearScreenForm />
        <YearScreenFooter />
      </HeaderReusable>
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

export default connect(mapStateToProps, mapDispatchToProps)(YearScreen)
