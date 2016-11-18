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
import NavBar from './NavBar.js';
import Spinner from 'react-native-loading-spinner-overlay';

export default class RandomList extends Component {
  constructor(props){
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })

    this.state = {
      beers: dataSource.cloneWithRows([]),
      visible: false
    }
  }

  componentDidMount() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })
    this.setState({
      visible: !this.state.visible
    })
    fetch('https://api.brewerydb.com/v2/beers?order=random&randomCount=10&hasLabel=Y&withBreweries=Y&withSocialAccounts=Y&withIngredients=Y&abv=0,50&key=71adb5730d8b61f38b3894fa400f85a7').then((response) => response.json())
    .then((responseText) => {
      this.setState({
        visible: !this.state.visible,
        beers: dataSource.cloneWithRows(responseText.data)
      })
    })
    .catch(function (error) {
      console.log(error);
  });
  }


  render() {
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Spinner overlayColor={'rgba(0,0,0,0.1)'} color={'#f7b20a'} visible={this.state.visible} />
        </View>
        <BeerList
          navigator={this.props.navigator}
          beers={this.state.beers}
        />
      </View>
    )
  }
}
