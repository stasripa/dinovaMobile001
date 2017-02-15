
import React, { PropTypes, Component } from 'react';
import axios from 'axios';
import api from '../utilities/api';
import { Image, Platform, StyleSheet, View, Dimensions, InteractionManager } from 'react-native';
import MapView from 'react-native-maps';

import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Header, Title, Footer, FooterTab, Text, Button, Icon, List, ListItem, CardItem, InputGroup, Input } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import FooterComponent from './../footer';
import theme from './map-theme';
import { CardStack, Card } from 'react-cardstack';


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

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }
  
  componentWillMount() {
    const data = {
      apikey: '88B6D7B3D8717086BBC0F6AA577E3531EAAEBB3ACBE4DF97540FD8B2AA5F89D744E0D77478AE7142CAD269995FFBA064',
      lat: '26.122438',
      lng: '26.122438',
      distance: 5,
      cuisine: '',
      name: '',
      city: '',
      state: '',
      zip: '' };

    api.getRestaurants().then((res) => {
      this.setState({
        restaurants: res.restaurants,
      });
    });

    // fetch(`http://23.253.253.107/query/v1.2/search?apikey=${data.apikey}&lat=${data.lat}&lng=${data.lng}&distance=${data.distance}&cuisine=${data.cuisine}&name=${data.name}&city=${data.city}&state=${data.state}&zip=${data.zip}`, {
    //   method: "GET"
    // })


    // axios({
    //   method: 'get',
    //   url: 'http://23.253.253.107/query/v1.2/search?',
    //   params: {
    //     apikey: '88B6D7B3D8717086BBC0F6AA577E3531EAAEBB3ACBE4DF97540FD8B2AA5F89D744E0D77478AE7142CAD269995FFBA064',
    //     lat: '26.122438',
    //     lng: '26.122438',
    //     distance: 5,
    //     cuisine: '',
    //     name: '',
    //     city: '',
    //     state: '',
    //     zip: '',
    //   },
    // }).then(response => console.log(response));

//     var params = new URLSearchParams();
//     params.append('apikey', '88B6D7B3D8717086BBC0F6AA577E3531EAAEBB3ACBE4DF97540FD8B2AA5F89D744E0D77478AE7142CAD269995FFBA064');
//     params.append('lat', '26.122438');
//     params.append('lng', '26.122438');
//     params.append('distance', '26.122438');
//     params.append('cuisine', '26.122438');
//     params.append('name', '26.122438');
//     params.append('city', '26.122438');
//     params.append('state', '26.122438');
//     params.append('zip', '26.122438');
// axios.get('http://23.253.253.107/query/v1.2/search?', params).then(response => console.log(response));

    // axios.get('http://23.253.253.107/query/v1.2/search?', {
    //   params: {
    //     apikey: '88B6D7B3D8717086BBC0F6AA577E3531EAAEBB3ACBE4DF97540FD8B2AA5F89D744E0D77478AE7142CAD269995FFBA064',
    //     lat: 26.122438,
    //     lng: 26.122438,
    //     distance: 5,
    //     // cuisine: ' ',
    //     name: '',
    //     // city: ' ',
    //     state: '',
    //     zip: '',
    //   },
    // })
    // .then(response => console.log(response));

    // axios.get('http://23.253.253.107/query/v1.2/search?apikey=88B6D7B3D8717086BBC0F6AA577E3531EAAEBB3ACBE4DF97540FD8B2AA5F89D744E0D77478AE7142CAD269995FFBA064&lat=26.122438&lng=-80.137314&distance=5&cuisine=&name=&city=&state=&zip=')
    // .then(response => console.log(response))
  }
  // apikey
  // lat
  // lng
  // distance
  // cuisine=
  // name=
  // city=
  // state=
  // zip=
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

        <Content style={{ backgroundColor: 'transparent' }}>
          <List>
            <ListItem iconLeft>
              <Icon name="ios-people" />
              <Text >Daily Stand Up</Text>
              <Text style={{ fontWeight: '400' }} note>10:00 AM</Text>
            </ListItem>
            <ListItem iconLeft>
              <Icon name="ios-flag" />
              <Text>Finish list Screen</Text>
              <Text style={{ fontWeight: '400' }} note>By 2:00 PM</Text>
            </ListItem>
            <ListItem iconLeft>
              <Icon name="ios-restaurant" />
              <Text>Lunch Break</Text>
              <Text style={{ fontWeight: '400' }} note>2:00 PM</Text>
            </ListItem>
            <ListItem iconLeft>
              <Icon name="ios-megaphone" />
              <Text>Discussion With Client</Text>
              <Text style={{ fontWeight: '400' }} note>6:00 PM</Text>
            </ListItem>
          </List>
        </Content>
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
