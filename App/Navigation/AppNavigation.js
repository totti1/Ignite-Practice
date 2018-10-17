// import React from 'react'
// import Icons from 'react-native-vector-icons/Entypo'
import { StackNavigator } from 'react-navigation'
import FlatListScreen from '../Containers/FlatListScreen'
import TabNavigatorScreen from '../Containers/TabNavigatorScreen'
import TabNavigationScreen from '../Containers/TabNavigationScreen'
import YearScreen from '../Containers/YearScreen'
import MonthScreen from '../Containers/MonthScreen'
import DayScreen from '../Containers/DayScreen'
import SignUpScreen from '../Containers/SignUpScreen'
import LoginScreen from '../Containers/LoginScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  FlatListScreen: { screen: FlatListScreen },
  TabNavigatorScreen: { screen: TabNavigatorScreen },
  YearScreen: { screen: YearScreen },
  MonthScreen: { screen: MonthScreen },
  DayScreen: { screen: DayScreen },
  TabNavigationScreen: { screen: TabNavigationScreen },
  SignUpScreen: { screen: SignUpScreen },
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'FlatListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
