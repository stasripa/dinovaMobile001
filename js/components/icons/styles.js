
const React = require('react-native');

const { StyleSheet,Dimensions } = React;

const deviceWidth = Dimensions.get('window').width;
module.exports = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingLeft: 15
  },
  icon: {
    width: deviceWidth/8,
    height: deviceWidth/8,
    justifyContent: 'center'
  },
});
