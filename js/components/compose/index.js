
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, Card, CardItem, View } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');

class Compose extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <Container theme={theme} style={{ backgroundColor: '#384850' }}>
        <Image source={glow2} style={styles.container} >

          <Header>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
            <Title>Compose</Title>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }}>
            <View style={styles.box}>
              <Card foregroundColor="#000">
                <CardItem header>
                  <Text>Compose Mail</Text>
                </CardItem>

                <CardItem header>
                  <Text>To : pratik@gmail.com</Text>
                </CardItem>

                <CardItem header>
                  <Text>Subject: Enquiry about StrapUI</Text>
                </CardItem>

                <CardItem>
                  <Text>
                    I watched Leicester City lose in the 1969 FA Cup final with my dad
                    and granddad when I was eight and cried all the way home.I have seen them
                    get promoted and relegated. I played for them for eight years. I even got a
                    group of like‑minded fans and friends to stump up a few quid to salvage the
                    club when they went into liquidation.
                  </Text>
                </CardItem>

                <CardItem header>
                  <Button
                    rounded
                    style={{ backgroundColor: '#00c497', paddingHorizontal: 15 }}
                    textStyle={{ color: '#fff' }}
                  >
                    Send
                  </Button>
                </CardItem>
              </Card>
            </View>
          </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Compose);
