import React, {Component} from 'react';
import _ from 'lodash';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Switch,
  Text
} from 'react-native';
import {ListView} from 'realm/react-native';

export default class Beer extends Component {
  render() {
    return(
      <TouchableHighlight onPress={() => console.log(this.props.beerName)} >
        <Text>{this.props.beerName.name}</Text>
      </TouchableHighlight>
    )
  }
}
