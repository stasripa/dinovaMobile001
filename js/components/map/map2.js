
import React, { PropTypes, Component } from 'react';
import { Image, Platform, StyleSheet, View, Dimensions, InteractionManager } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Footer, FooterTab, Text, Button, Icon, List, ListItem, Card, CardItem, InputGroup, Input } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import FooterComponent from './../footer';
import theme from './map-theme';
// import styles from './styles';


const {
  popRoute,
} = actions;


class Dmap extends Component {

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
    const { width, height } = Dimensions.get('window');
    const ratio = width / height;

    const coordinates = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * ratio,
    };

    return (
      <Container>
        <Header>
          <Title>Map</Title>
          <Button transparent>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <View style={styles.container}>
          {!1? (
            <Loading />
          ) : (
            <MapView
              style={styles.map}
              initialRegion={coordinates}
            />
          )}
        </View>
        <Footer style={{ borderTopWidth: 0 }}>
          <FooterComponent navigator={this.props.navigation} />
        </Footer>

      </Container>
    );
  }
}

const Loading = () => (
  <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject,
  },
});


function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Dmap);
