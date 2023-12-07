import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242526',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

  logo: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
