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
import Beer from './Beer.js';
import axios from 'axios';

export default class BeerList extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <View>
        <ListView
          navigator={this.props.navigator}
          enableEmptySections={true}
          dataSource={this.props.beers}
          renderRow={(rowData) => <Beer navigator={this.props.navigator} beerObject={rowData} />}
        />
      </View>
    )
  }
}
