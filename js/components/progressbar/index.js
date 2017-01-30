
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, List, ListItem, Card, CardItem } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import ProgressBar from './../loaders/ProgressBar';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');

class ProgressBarNSP extends Component {

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
      <Container theme={theme} style={{ backgroundColor: '#384850' }} >
        <Image source={glow2} style={styles.container} >

          <Header>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
            <Title>ProgressBar</Title>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }} >
            <Card transparent foregroundColor="#000">
              <CardItem header>
                <Text>Default ProgressBar</Text>
              </CardItem>
              <CardItem>
                <List>
                  <ListItem style={{ borderBottomWidth: 0 }}>
                    <ProgressBar progress={25} />
                  </ListItem>
                </List>
              </CardItem>
              <CardItem header>
                <Text>Inverse ProgressBar</Text>
              </CardItem>
              <CardItem>
                <List>
                  <ListItem style={{ borderBottomWidth: 0 }}>
                    <ProgressBar inverse progress={76} />
                  </ListItem>
                </List>
              </CardItem>
              <CardItem header>
                <Text>Custom ProgressBar</Text>
              </CardItem>
              <CardItem>
                <List>
                  <ListItem style={{ borderBottomWidth: 0 }}>
                    <ProgressBar color="#00ff03" progress={39} />
                  </ListItem>
                </List>
              </CardItem>
            </Card>
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

export default connect(mapStateToProps, bindAction)(ProgressBarNSP);
