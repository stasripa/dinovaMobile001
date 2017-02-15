
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, Thumbnail } from 'native-base';

const sanket = require('../../../images/contacts/sanket.png');
const pratik = require('../../../images/contacts/pratik.png');
const varun = require('../../../images/contacts/varun.png');
const megha = require('../../../images/contacts/megha.png');
const atul = require('../../../images/contacts/atul.png');
const saurav = require('../../../images/contacts/saurav.png');
const sankha = require('../../../images/contacts/sankha.png');

class RestaurantDetail extends Component { // eslint-disable-line react/prefer-stateless-function

  render() { // eslint-disable-line  class-methods-use-this
    return (
      <Content style={{ backgroundColor: 'transparent' }}>
        <List>
          <ListItem>
            <Thumbnail circular size={50} source={sanket} />
            <Text>{props.restaurant.name}</Text>
            <Text note>8861522489</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default connect(null)(RestaurantDetail);
