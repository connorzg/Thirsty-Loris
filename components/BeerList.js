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
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })
    this.state = {
      beers: dataSource.cloneWithRows([])
    }
    fetch('https://api.brewerydb.com/v2/beers?key=71adb5730d8b61f38b3894fa400f85a7').then((response) => response.json())
    .then((responseText) => {
      console.log(responseText);
      this.setState({
        beers: dataSource.cloneWithRows(responseText.data)
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return(
      <View>
        <ListView
          dataSource={this.state.beers}
          renderRow={(rowData) => <Text>{rowData.name}</Text>}
        />
      </View>
    )
  }
}
