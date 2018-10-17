import { StyleSheet, Platform } from 'react-native'

const type = {
  base: (Platform.OS === 'ios' ? 'Avenir-Book' : 'sans-serif'),
  bold: (Platform.OS === 'ios' ? 'Avenir-Black' : 'sans-serif-condensed'),
  emphasis: (Platform.OS === 'ios' ? 'HelveticaNeue-Italic' : 'sans-serif')
}

export default StyleSheet.create({
  container: {
    marginBottom: 60
  },
  text: {
    fontWeight: 'bold',
    fontFamily: type.base,
    color: 'white',
    backgroundColor: 'transparent'
  }
})
