

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, InputGroup, Input, View } from 'native-base';
import { actions } from 'react-native-navigation-redux-helpers';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');

class SignUp extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
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

            <Title>SignUp</Title>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }}>
            <View padder>
              <View style={styles.mb25}>
                <InputGroup>
                  <Icon name="ios-person" />
                  <Input placeholder="Name" />
                </InputGroup>
              </View>

              <View style={styles.mb25}>
                <InputGroup>
                  <Icon name="ios-mail-open-outline" />
                  <Input placeholder="Email" />
                </InputGroup>
              </View>

              <View style={styles.mb25}>
                <InputGroup>
                  <Icon name="ios-unlock-outline" />
                  <Input
                    placeholder="Password"
                    secureTextEntry
                  />
                </InputGroup>
              </View>

              <View style={styles.mb25}>
                <InputGroup>
                  <Icon name="ios-calendar-outline" />
                  <Input placeholder="Birthday" />
                </InputGroup>
              </View>

              <View style={styles.mb25}>
                <InputGroup>
                  <Icon name="ios-transgender" />
                  <Input placeholder="Gender" />
                </InputGroup>
              </View>

              <Button rounded block style={{ backgroundColor: '#fff', marginTop: 20 }} textStyle={{ color: '#00c497' }}>
                  Save and Continue
              </Button>
            </View>
          </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SignUp);
