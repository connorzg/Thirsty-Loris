import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Switch,
  Text,
  TextInput
} from 'react-native';
import {ListView} from 'realm/react-native';
import realm from '../utils/realm';
import axios from 'axios';
import SearchBar from './SearchBar.js';
import Dropdown from './Dropdown.js';
import NavBar from './NavBar.js';
import CityLocation from './CityLocation.js';
import BeerList from './BeerList.js';
import BreweryList from './BreweryList.js';
import BrewerySearch from './BrewerySearch.js';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  // _searchTerm(term) {
  //   this.setState({searchTerm:term})
  // }

  render() {

    return(
      <View style={styles.container}>
        <SearchBar  />
        <Dropdown callback={this._searchTerm} />
        <NavBar />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'rgb(239,179,72)'
  }
})
