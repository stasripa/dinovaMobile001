
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, Footer } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import navigateTo from '../../actions/sideBarNav';

import FooterComponent from './../footer';
import theme from '../../themes/base-theme';
import styles from './styles';

const CalendarPicker = require('react-native-calendar-picker');

const glow2 = require('../../../images/glow2.png');

const {
  popRoute,
} = actions;

class Calendar extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  onDateChange(date) {
    this.setState({ date });
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Container theme={theme} style={{ backgroundColor: '#384850' }}>
        <Image source={glow2} style={styles.container} >
          <Header>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>

            <Title>Calendar</Title>

            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }} >
            <CalendarPicker
              selectedDate={this.state.date}
              onDateChange={e => this.onDateChange(e)}
              textStyle={{ color: '#fff' }}
              selectedDayColor="#00c497"
            />

            <Text style={{ marginTop: 5, alignSelf: 'center' }} >
              Date: { this.state.date.toString().substr(4, 12) }
            </Text>
          </Content>

          <Footer style={{ borderTopWidth: 0 }}>
            <FooterComponent />
          </Footer>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Calendar);
