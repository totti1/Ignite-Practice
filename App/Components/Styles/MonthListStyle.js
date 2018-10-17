import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 10,
    marginLeft: 20
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  headerText1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30
  },
  text: {
    marginTop: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
