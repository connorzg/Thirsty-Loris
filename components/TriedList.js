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

export default class TriedList extends Component {
  constructor(props){
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })
    this.state = {
      beers: dataSource.cloneWithRows([])
    }
    fetch('https://api.brewerydb.com/v2/beers?order=random&randomCount=10&hasLabel=Y&withBreweries=Y&withSocialAccounts=Y&withIngredients=Y&abv=0,50&key=71adb5730d8b61f38b3894fa400f85a7').then((response) => response.json())
    .then((responseText) => {
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
        <BeerList navigator={this.props.navigator}
          beers={this.state.beers}
        />
        <NavBar nearMe={this._nearMePress} saved={this._savedPress} tasted={this._tastedPress}/>
      </View>
    )
  }
}
