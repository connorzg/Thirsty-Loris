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
        <Text>{this.props.beerObject.abv}</Text>
        <Text>{this.props.beerObject.description}</Text>
        <Text>{this.props.beerObject.style.name}</Text>
      </View>
    )
  }
}
