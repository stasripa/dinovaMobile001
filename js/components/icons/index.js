
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');

class Icons extends Component {

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
            <Title>Icons</Title>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }}>
            <View style={styles.iconContainer} >
              <Icon name="logo-apple" style={styles.icon} />
              <Icon name="ios-pizza" style={styles.icon} />
              <Icon name="ios-person-outline" style={styles.icon} />
              <Icon name="ios-beer" style={styles.icon} />
              <Icon name="ios-bicycle" style={styles.icon} />
              <Icon name="ios-navigate-outline" style={styles.icon} />
              <Icon name="ios-cloud-circle" style={styles.icon} />
              <Icon name="ios-pie-outline" style={styles.icon} />
              <Icon name="ios-bookmarks-outline" style={styles.icon} />
              <Icon name="ios-pulse" style={styles.icon} />
              <Icon name="ios-camera-outline" style={styles.icon} />
              <Icon name="ios-mic-off" style={styles.icon} />
              <Icon name="ios-film" style={styles.icon} />
              <Icon name="ios-flame" style={styles.icon} />
              <Icon name="ios-paper-outline" style={styles.icon} />
              <Icon name="ios-paper-plane" style={styles.icon} />
              <Icon name="ios-speedometer-outline" style={styles.icon} />
              <Icon name="ios-cart-outline" style={styles.icon} />
              <Icon name="ios-flask-outline" style={styles.icon} />
              <Icon name="ios-cloudy-night" style={styles.icon} />
              <Icon name="ios-partly-sunny" style={styles.icon} />
              <Icon name="ios-paw-outline" style={styles.icon} />
              <Icon name="ios-rose" style={styles.icon} />
              <Icon name="ios-pint-outline" style={styles.icon} />
              <Icon name="ios-shuffle" style={styles.icon} />
              <Icon name="ios-game-controller-a" style={styles.icon} />
              <Icon name="ios-glasses-outline" style={styles.icon} />
              <Icon name="ios-microphone" style={styles.icon} />
              <Icon name="ios-keypad" style={styles.icon} />
              <Icon name="ios-color-filter-outline" style={styles.icon} />
              <Icon name="ios-eye-outline" style={styles.icon} />
              <Icon name="ios-mic-off" style={styles.icon} />
              <Icon name="ios-alarm-outline" style={styles.icon} />
              <Icon name="ios-medkit" style={styles.icon} />
              <Icon name="ios-ionic-outline" style={styles.icon} />
              <Icon name="ios-star-half" style={styles.icon} />
              <Icon name="ios-refresh" style={styles.icon} />
              <Icon name="ios-train" style={styles.icon} />
              <Icon name="ios-musical-notes" style={styles.icon} />
              <Icon name="ios-wine" style={styles.icon} />
              <Icon name="ios-nutrition" style={styles.icon} />
              <Icon name="ios-thunderstorm-outline" style={styles.icon} />
              <Icon name="ios-grid-outline" style={styles.icon} />
              <Icon name="ios-settings" style={styles.icon} />
              <Icon name="ios-chatbubbles" style={styles.icon} />
              <Icon name="ios-chatboxes" style={styles.icon} />
              <Icon name="ios-cog-outline" style={styles.icon} />
              <Icon name="ios-baseball-outline" style={styles.icon} />
              <Icon name="ios-bulb-outline" style={styles.icon} />
              <Icon name="ios-calculator" style={styles.icon} />
              <Icon name="ios-rainy" style={styles.icon} />
              <Icon name="ios-videocam-outline" style={styles.icon} />
              <Icon name="ios-play-outline" style={styles.icon} />
              <Icon name="ios-disc-outline" style={styles.icon} />
              <Icon name="ios-body" style={styles.icon} />
              <Icon name="ios-lock" style={styles.icon} />
              <Icon name="ios-skip-backward-outline" style={styles.icon} />
              <Icon name="ios-key" style={styles.icon} />
              <Icon name="ios-flag-outline" style={styles.icon} />
              <Icon name="ios-skip-forward" style={styles.icon} />
              <Icon name="ios-barcode-outline" style={styles.icon} />
              <Icon name="logo-tux" style={styles.icon} />
              <Icon name="ios-copy-outline" style={styles.icon} />
              <Icon name="ios-stopwatch" style={styles.icon} />
              <Icon name="ios-medical-outline" style={styles.icon} />
              <Icon name="ios-archive" style={styles.icon} />
              <Icon name="ios-bookmark" style={styles.icon} />
              <Icon name="ios-clipboard" style={styles.icon} />
              <Icon name="ios-happy" style={styles.icon} />
              <Icon name="ios-share" style={styles.icon} />
              <Icon name="ios-bluetooth" style={styles.icon} />
              <Icon name="ios-search" style={styles.icon} />
              <Icon name="ios-wifi" style={styles.icon} />
              <Icon name="ios-hand-outline" style={styles.icon} />
              <Icon name="ios-trash" style={styles.icon} />
              <Icon name="ios-images" style={styles.icon} />
              <Icon name="ios-attach" style={styles.icon} />
              <Icon name="logo-facebook" style={styles.icon} />
              <Icon name="logo-googleplus" style={styles.icon} />
              <Icon name="logo-twitter" style={styles.icon} />
              <Icon name="logo-github" style={styles.icon} />
              <Icon name="logo-whatsapp" style={styles.icon} />
              <Icon name="logo-wordpress" style={styles.icon} />
              <Icon name="logo-youtube" style={styles.icon} />
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

export default connect(mapStateToProps, bindAction)(Icons);
