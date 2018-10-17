import { TabNavigator, TabBarBottom } from 'react-navigation'
import { connect } from 'react-redux'

import MonthScreen from './MonthScreen'
import DayScreen from './DayScreen'
import YearScreen from './YearScreen'

const TabNavigationScreen = TabNavigator({
    Day: {screen: DayScreen},
    Month: {screen: MonthScreen},
    Year: {screen: YearScreen}
    },
  {
    // navigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state
    //     let iconName
    //     if (routeName === 'Day') {
    //       iconName = `dot-single${focused ? '' : '-outline'}`
    //     } else if (routeName === 'Month') {
    //       iconName = `dot-single${focused ? '' : '-outline'}`
    //     } else if (routeName === 'Year') {
    //       iconName = `dot-single${focused ? '' : '-outline'}`
    //     }
    //
    //     // You can return any component that you like here! We usually use an
    //     // icon component from react-native-vector-icons
    //     return <Icons name={iconName} size={25} color={tintColor} />
    //   }
    // }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'tomato',
      labelStyle: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center'
      },
      // style: {
      //   backgroundColor: '#17202A',
      //   borderTopWidth: 1,
      //   borderTopColor: 'white',
      //   justifyContent: 'center'
      // }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom'
  })

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigationScreen)
