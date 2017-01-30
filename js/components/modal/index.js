
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import Modal from 'react-native-modalbox';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');

class Modal1 extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
    };
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  openModal1() {
    this.modal1.open();
  }
  closeModal1() {
    this.modal1.close();
  }
  openModal2() {
    this.modal2.open();
  }
  closeModal2() {
    this.modal2.close();
  }

  render() {
    return (
      <Container theme={theme} style={{ backgroundColor: '#384850' }}>
        <Image source={glow2} style={styles.container} >

          <Header>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
            <Title>Modal</Title>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
          </Header>

          <Content style={{ backgroundColor: 'transparent' }}>
            <View style={styles.box}>
              <View style={styles.space}>
                <Button
                  block
                  rounded
                  style={{ backgroundColor: '#00c497' }}
                  textStyle={{ color: '#fff' }}
                  onPress={() => this.openModal1()}
                >
                   Basic Modal
                </Button>
              </View>
              <View style={styles.space}>
                <Button
                  block
                  rounded
                  style={{ backgroundColor: '#00c497' }}
                  textStyle={{ color: '#fff' }}
                  onPress={() => this.openModal2()}
                >
                   Custom Modal
                </Button>
              </View>
            </View>

            <Modal
              style={[styles.modal, styles.modal1]}
              backdrop={false}
              ref={(c) => { this.modal1 = c; }}
              swipeToClose={this.state.swipeToClose}
            >
              <View style={styles.space}>
                <Text style={{ color: '#000', marginBottom: 10 }}>Basic modal</Text>
                <Button
                  rounded
                  style={{ backgroundColor: '#00c497' }}
                  textStyle={{ color: '#fff' }}
                  onPress={() => this.closeModal1()}
                >
                 Close Modal
                </Button>
              </View>
            </Modal>

            <Modal
              style={[styles.modal, styles.modal2]}
              backdrop={false}
              ref={(c) => { this.modal2 = c; }}
              swipeToClose={false}
            >
              <Button
                transparent
                style={{ position: 'absolute', top: 0, right: 0 }}
                onPress={() => this.closeModal2()}
              >
                <Icon name="ios-close" style={{ color: '#000' }} />
              </Button>
              <View style={styles.space}>
                <Text style={{ color: '#000' }}>
                    This is a full screen modal.
                </Text>
              </View>
            </Modal>
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

export default connect(mapStateToProps, bindAction)(Modal1);
