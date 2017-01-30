
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, Thumbnail } from 'native-base';

const sanket = require('../../../images/contacts/sanket.png');
const pratik = require('../../../images/contacts/pratik.png');

class Recent extends Component { // eslint-disable-line react/prefer-stateless-function

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Content style={{ backgroundColor: 'transparent' }}>
        <List>
          <ListItem>
            <Thumbnail circular size={50} source={sanket} />
            <Text>Kumar Sanket</Text>
            <Text note>8861522489</Text>
          </ListItem>
          <ListItem>
            <Thumbnail circular size={50} source={pratik} />
            <Text>Kumar Pratik</Text>
            <Text note>8861522489</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default connect(null)(Recent);
