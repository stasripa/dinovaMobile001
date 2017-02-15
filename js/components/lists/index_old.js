
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Text, Button, Icon, List, ListItem } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

const glow2 = require('../../../images/glow2.png');

class Lists extends Component {

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
            <Title>List</Title>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
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
              <Content style={{ backgroundColor: 'transparent' }}>
                // <ListItem iconLeft>
                //   <Icon name="ios-people" />
                //   <Text >{this.renderRestaurants()}</Text>
                //
                // </ListItem>
            </List>
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

export default connect(mapStateToProps, bindAction)(Lists);

// <Content style={{ backgroundColor: 'transparent' }}>
//   <ListItem iconLeft>
//     <Icon name="ios-people" />
//     <Text >{this.renderRestaurants()}</Text>
//     <Text style={{ fontWeight: '400' }} note>{this.renderRestaurants()}</Text>
//   </ListItem>
//     {this.renderRestaurants()}
// </Content>

// <Container>
//
//
//     <Header>
//       <Button transparent onPress={() => this.popRoute()}>
//         <Icon name="ios-arrow-back" style={{ fontSize: 30, lineHeight: 32 }} />
//       </Button>
//       <Title>Restaurant List</Title>
//       <Button transparent onPress={this.props.openDrawer}>
//         <Icon name="ios-menu" style={{ fontSize: 30, lineHeight: 32 }} />
//       </Button>
//     </Header>
//     <Content>
//       <Card>
//         <CardItem bordered>
//           <Left>
//             <Thumbnail />
//             <Body>
//               <Text>NativeBase</Text>
//               <Text note>April 15, 2016</Text>
//             </Body>
//           </Left>
//         </CardItem>
//
//         <CardItem>
//           <Body>
//
//             <Image style={{ resizeMode: 'cover' }} source={sanket} />
//             <Text>hello</Text>
//             <Button transparent textStyle={{ color: '#87838B' }}>
//               <Icon name="logo-github" />
//               <Text>1,926 stars</Text>
//             </Button>
//           </Body>
//         </CardItem>
//       </Card>
//     </Content>
// </Container>
