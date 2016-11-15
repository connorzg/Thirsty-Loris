import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Switch,
  Text
} from 'react-native';
import {ListView} from 'realm/react-native';
import realm from '../utils/realm';
import axios from 'axios';
import BeerList from './BeerList.js';
import RandomList from './RandomList.js';
import TypeSearch from './TypeSearch.js';



export default class App extends Component {


  render() {

    return(

        <TypeSearch />

    )
  }
}
