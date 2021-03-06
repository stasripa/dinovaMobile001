
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    width: null,
    height: null,
    flex: 1,
  },
  card: {
    borderWidth: 0,
  },
  cardHeader: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    paddingBottom: 10,
    height: 65,
  },
  cardItem: {
    backgroundColor: 'transparent',
    paddingTop: 5,
    paddingLeft: 55,
  },
  date: {
    textAlign: 'right',
    marginTop: -35,
    fontSize: 13,
    fontWeight: '400',
    color: '#ddd',
  },
  attachment: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 5,
  },
  note: {
    marginTop: -8,
  },
});
