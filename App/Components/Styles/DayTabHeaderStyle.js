import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: 'row'
  },
  imageStyle: {
    position: 'absolute',
    marginTop: 10,
    zIndex: 99,
    width: 35,
    height: 35,
    left: 200,
    bottom: 1,
    // top: 1
  },
  // imageStyleBell: {
  //   color: 'white',
  //   position: 'absolute',
  //   marginTop: 10,
  //   zIndex: 99,
  //   width: 35,
  //   height: 35,
  //   left: 200,
  //   bottom: 1,
  //   // top: 1
  // },
  textContainer: {
    marginTop: 30,
    marginLeft: 20
  },
  text1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  text2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30
  }


})
