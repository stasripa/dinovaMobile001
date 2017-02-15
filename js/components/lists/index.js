
import React, { Component } from 'react';
import axios from 'axios';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Title, Header, Content, Button, Icon } from 'native-base';
import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';
import RestaurantDetail from './RestaurantDetail';

const { popRoute } = actions;
const glow2 = require('../../../images/glow2.png');

class Lists extends Component {


  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  state = { restaurants: [] };

  componentWillMount() {
    axios.get('http://23.253.253.107/query/v1.2/search?apikey=88B6D7B3D8717086BBC0F6AA577E3531EAAEBB3ACBE4DF97540FD8B2AA5F89D744E0D77478AE7142CAD269995FFBA064&lat=26.122438&lng=-80.137314&distance=5&cuisine=&name=&city=&state=&zip=')
      .then(response => this.setState({ restaurants: response.data }));
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  renderRestaurants() {
    return this.state.restaurants.map(restaurant =>
      <RestaurantDetail key={restaurant.id} restaurant={restaurant} />);
  }

  render() {
    console.log(this.state);
    return (
      <Container theme={theme} style={{ backgroundColor: '#384850' }}>
        <Image source={glow2} style={styles.container} >

          <Header>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="ios-arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
            <Title>List</Title>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
            </Button>
          </Header>

          <Content style={{ backgroundColor: 'transparent' }}>
            <View>{this.renderRestaurants()}</View>
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
  restaurants: state.restaurants,
});

export default connect(mapStateToProps, bindAction)(Lists);
