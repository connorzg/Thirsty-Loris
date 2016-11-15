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
import BeerInfo from './BeerInfo.js';

export default class Beer extends Component {
  render() {
    return(
      <View>
      <TouchableHighlight onPress={() => console.log(this.props.beerObject)} >
        <Text>{this.props.beerObject.name}</Text>

      </TouchableHighlight>
      <BeerInfo beer={this.props.beerObject} />
      </View>
    )
  }
}
