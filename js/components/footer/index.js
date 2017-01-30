
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Icon, View } from 'native-base';

import navigateTo from '../../actions/sideBarNav';

import styles from './styles';

class Footer extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => this.navigateTo('calendar')}>
          <Icon name="ios-calendar-outline" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateTo('form')}>
          <Icon name="ios-pie-outline" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ios-add-circle-outline" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateTo('contacts')}>
          <Icon name="ios-person" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.navigateTo('spinners')}>
          <Icon name="ios-time-outline" />
        </TouchableOpacity>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});


export default connect(mapStateToProps, bindAction)(Footer);
