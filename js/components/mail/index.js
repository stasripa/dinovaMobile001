

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, Card, CardItem, Thumbnail } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');
const sanket = require('../../../images/contacts/sanket.png');

class Mail extends Component {

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
            <Title>Mail</Title>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
          </Header>

          <Content padder style={{ backgroundColor: 'transparent' }}>
            <Card transparent style={styles.card}>
              <CardItem header style={styles.cardHeader}>
                <Thumbnail source={sanket} />
                <Text>Kumar Sanket</Text>
                <Text note style={styles.note}>StrapMobile</Text>
                <Text style={styles.date}>18 May, 5:15 PM</Text>
              </CardItem>

              <CardItem style={styles.cardItem}>
                <Text style={{ marginBottom: 15 }}>
                    Before Monday night’s fixture against Newcastle, Leicester are top of the
                    Premier League. Before Monday night’s fixture against Newcastle,
                    Leicester are top of the Premier League. Before Monday night’s fixture against
                    Newcastle, Leicester are top of the Premier League. Before Monday night’s
                    fixture against Newcastle, Leicester are top of the Premier League.
                </Text>
                <Text style={{ flex: 0 }}>Thanks,</Text>
                <Text style={{ flex: 0 }}>Kumar Sanket</Text>
                <Text style={{ flex: 0 }}>Sahusoft India Pvt. Ltd.</Text>
              </CardItem>
            </Card>

            <View style={{ paddingTop: 10 }} >
              <Text >Attachments</Text>
              <View style={styles.attachment}>
                <Icon name="ios-images" style={{ fontSize: 27 }} />
                <Text style={{ marginLeft: 5 }}>invitation.jpg</Text>
              </View>
              <View style={styles.attachment}>
                <Icon name="ios-images" style={{ fontSize: 27 }} />
                <Text style={{ marginLeft: 5 }}>profile.jpg</Text>
              </View>
              <View style={styles.attachment}>
                <Icon name="ios-images" style={{ fontSize: 27 }} />
                <Text style={{ marginLeft: 5 }}>mail.jpg</Text>
              </View>
              <View style={styles.attachment}>
                <Icon name="ios-images" style={{ fontSize: 27 }} />
                <Text style={{ marginLeft: 5 }}>inbox.jpg</Text>
              </View>
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

export default connect(mapStateToProps, bindAction)(Mail);
