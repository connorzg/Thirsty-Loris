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
import BeerList from './BeerList.js';
import axios from 'axios';
import realm from '../utils/realm.js'

export default class SavedList extends Component {
  constructor(props){
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })

    let savedBeer = realm.objects('Beer').filtered('list = "saved"');

    this.state = {
      beers: dataSource.cloneWithRows(savedBeer)
    }
    //console.log(realm.objects('Beer'));
    console.log(savedBeer);
  }


  render() {
    return(
      <View style={{flex: 1}}>
        <BeerList
          navigator={this.props.navigator}
          beers={this.state.beers}
        />
      </View>
    )
  }
}
