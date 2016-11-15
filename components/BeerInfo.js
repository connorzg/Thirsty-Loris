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

export default class BeerInfo extends Component {
  render() {
    return(
      <View>
        <Text>{this.props.beer.abv}</Text>
        <Text>{this.props.beer.description}</Text>
        <Text>{this.props.beer.style.name}</Text>
        <Text></Text>
      </View>
    )
  }
}
