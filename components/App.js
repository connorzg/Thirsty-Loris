import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Switch,
  Text
} from 'react-native';
import {ListView} from 'realm/react-native';
import realm from '../utils/realm';
import axios from 'axios';
import SearchBar from './SearchBar.js';
import Dropdown from './Dropdown.js';
import NavBar from './NavBar.js';
import CityLocation from './CityLocation.js';
import BeerList from './BeerList.js';
import RandomList from './RandomList.js';
import TypeSearch from './TypeSearch.js';



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


        <TypeSearch />


    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
}
