
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
const bkgImg = require('../../../images/launchscreen_fade.png');

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
        <Image source={bkgImg} style={styles.container} >

          <Header>
            <Title>Welcome</Title>
            <Button transparent onPress={this.props.openDrawer} >
              <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
          </Header>


          <Content padder style={{ backgroundColor: 'transparent' }}>
            <Content>
              <Text style={styles.headline}>Search Dinova</Text>
              <Text style={styles.headline2}>Network Restaurants</Text>
            </Content>
            <List>
              <ListItem iconRight style={{ justifyContent: 'flex-start' }} button onPress={() => this.navigateTo('form')} >

                <Text style={{ color: 'green' }}>Near Me</Text>
                <Icon name="ios-arrow-forward" style={{ width: 30, color: 'green' }} />

              </ListItem>
              <ListItem iconRight >
                <Icon name="ios-search-outline" style={{ width: 30, color: 'green' }} />
                <Text style={{ color: 'green' }}>Where Im Going</Text>


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
