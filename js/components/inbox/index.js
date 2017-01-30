
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, Card, CardItem, Thumbnail } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './style';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');
const sanket = require('../../../images/contacts/sanket.png');
const pratik = require('../../../images/contacts/pratik.png');

class Inbox extends Component {

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
            <Title>Inbox</Title>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
          </Header>

          <Content style={{ backgroundColor: 'transparent' }}>
            <Card transparent foregroundColor="#fff" style={styles.card}>
              <CardItem style={styles.cardHeader} header>
                <Thumbnail source={sanket} />
                <Text>Kumar Sanket</Text>
                <Text note style={{ marginTop: -8 }}>StrapMobile</Text>
                <Text style={styles.date}>Monday 05, 11 AM</Text>
              </CardItem>

              <CardItem style={styles.cardItem} >
                <Text>
                    Before Monday night’s fixture against Newcastle,
                    Leicester are top of the Premier League.
                </Text>
              </CardItem>
            </Card>

            <Card transparent foregroundColor="#fff" style={styles.card}>
              <CardItem style={styles.cardHeader} header>
                <Thumbnail source={pratik} />
                <Text>Kumar Pratik</Text>
                <Text note style={{ marginTop: -8 }}>StrapUI</Text>
                <Text style={styles.date}>Monday 05, 11 AM</Text>
              </CardItem>

              <CardItem style={styles.cardItem} >
                <Text>
                    Before Monday night’s fixture against Newcastle,
                    Leicester are top of the Premier League.
                </Text>
              </CardItem>
            </Card>

            <Card transparent foregroundColor="#fff" style={styles.card}>
              <CardItem style={styles.cardHeader} header>
                <Thumbnail source={pratik} />
                <Text>Kumar Pratik</Text>
                <Text note style={{ marginTop: -8 }}>StrapUI</Text>
                <Text style={styles.date}>Monday 05, 11 AM</Text>
              </CardItem>

              <CardItem style={styles.cardItem} >
                <Text>
                    Before Monday night’s fixture against Newcastle,
                    Leicester are top of the Premier League.
                </Text>
              </CardItem>
            </Card>

            <Card transparent foregroundColor="#fff" style={styles.card}>
              <CardItem style={styles.cardHeader} header>
                <Thumbnail source={pratik} />
                <Text>Kumar Pratik</Text>
                <Text note style={{ marginTop: -8 }}>StrapUI</Text>
                <Text style={styles.date}>Monday 05, 11 AM</Text>
              </CardItem>

              <CardItem style={styles.cardItem} >
                <Text>
                    Before Monday night’s fixture against Newcastle,
                    Leicester are top of the Premier League.
                </Text>
              </CardItem>
            </Card>

            <Card transparent foregroundColor="#fff" style={styles.card}>
              <CardItem style={styles.cardHeader} header>
                <Thumbnail source={pratik} />
                <Text>Kumar Pratik</Text>
                <Text note style={{ marginTop: -8 }}>StrapUI</Text>
                <Text style={styles.date}>Monday 05, 11 AM</Text>
              </CardItem>

              <CardItem style={styles.cardItem} >
                <Text>
                    Before Monday night’s fixture against Newcastle,
                    Leicester are top of the Premier League.
                </Text>
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

export default connect(mapStateToProps, bindAction)(Inbox);
