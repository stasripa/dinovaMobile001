
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Footer } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import FooterComponent from './../footer';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  reset,
} = actions;

const glow2 = require('../../../images/glow2.png');

class Home extends Component {  //eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <Container theme={theme} style={{ backgroundColor: '#384850' }}>
        <Image source={glow2} style={styles.container} >

          <Header>
            <Title>Home</Title>
            <Button transparent onPress={this.props.openDrawer} >
              <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }}>
            <List>
              <ListItem iconLeft >
                <Icon name="ios-megaphone" style={{width: 30}} />
                <Text>Discussion With Client</Text>
                <Text style={{ fontWeight: '400' }} note>8:00 AM</Text>
              </ListItem>
              <ListItem iconLeft >
                <Icon name="ios-people" style={{width: 30}} />
                <Text >Daily Stand Up</Text>
                <Text style={{ fontWeight: '400' }} note>10:00 AM</Text>
              </ListItem>
              <ListItem iconLeft >
                <Icon name="ios-flag" style={{width: 30}} />
                <Text>Finish list Screen</Text>
                <Text style={{ fontWeight: '400' }} note>By 2:00 PM</Text>
              </ListItem>
              <ListItem iconLeft >
                <Icon name="ios-restaurant" style={{width: 30}} />
                <Text>Lunch Break</Text>
                <Text style={{ fontWeight: '400' }} note>2:00 PM</Text>
              </ListItem>
            </List>

            <Button
              transparent
              large
              style={styles.roundedButton}
              onPress={() => this.props.reset(this.props.navigation.key)}
            >
              <Icon name="ios-close-outline" style={styles.closeIcon} />
            </Button>
          </Content>

          <Footer style={{ borderTopWidth: 0 }}>
            <FooterComponent navigator={this.props.navigation} />
          </Footer>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
