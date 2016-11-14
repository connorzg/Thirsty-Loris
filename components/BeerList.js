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
  constructor(props) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    super(props)
    fetch('http://api.brewerydb.com/v2/beers?order=random&randomCount=10&key=71adb5730d8b61f38b3894fa400f85a7').then(function(response) {
      console.log(response);
      this.state = { dataSource: ds.cloneWithRows([response]) };
    })
  }


  render() {
    return(
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
}
