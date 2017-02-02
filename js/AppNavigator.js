
import React, { Component } from 'react';
import { BackAndroid, StatusBar, NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { actions } from 'react-native-navigation-redux-helpers';

import { closeDrawer } from './actions/drawer';

import Login from './components/login/';
import SplashPage from './components/splashscreen/';
import Home from './components/home/';
import SignUp from './components/sign-up/';
import Inbox from './components/inbox/';
import Mail from './components/mail/';
import Compose from './components/compose/';
import Lists from './components/lists/';
import Icons from './components/icons/';
import ProgressBar from './components/progressbar/';
import Spinner from './components/spinner/';
import Contacts from './components/contact/';
import Calendar from './components/calendar/';
import Form from './components/form/';
import Modal from './components/modal/';
import SideBar from './components/sideBar';
import { statusBarColor } from './themes/base-theme';
import Dmap from './components/map/';

const {
  popRoute,
} = actions;

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    popRoute: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
      routes: React.PropTypes.array,
    }),
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this.props.navigation.routes;

      if (routes[routes.length - 1].key === 'home' || routes[routes.length - 1].key === 'login') {
        return false;
      }

      this.props.popRoute(this.props.navigation.key);
      return true;
    });
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.close();
    }
  }

  popRoute() {
    this.props.popRoute();
  }

  openDrawer() {
    this._drawer.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  _renderScene(props) { // eslint-disable-line class-methods-use-this
    switch (props.scene.route.key) {
      case 'splashscreen':
        return <SplashPage />;
      case 'login':
        return <Login />;
      case 'home':
        return <Home />;
      case 'inbox':
        return <Inbox />;
      case 'compose':
        return <Compose />;
      case 'signUp':
        return <SignUp />;
      case 'mail':
        return <Mail />;
      case 'lists':
        return <Lists />;
      case 'icons':
        return <Icons />;
      case 'progressBar':
        return <ProgressBar />;
      case 'spinners':
        return <Spinner />;
      case 'contacts':
        return <Contacts />;
      case 'calendar':
        return <Calendar />;
      case 'form':
        return <Form />;
      case 'modal':
        return <Modal />;
      case 'map':
        return <Dmap />;
      default :
        return <Dmap />;
    }
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<SideBar navigator={this._navigator} />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {  //eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
      >
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle="light-content"
        />
        <NavigationCardStack
          navigationState={this.props.navigation}
          renderOverlay={this._renderOverlay}
          renderScene={this._renderScene}
        />
      </Drawer>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    popRoute: (key) => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
