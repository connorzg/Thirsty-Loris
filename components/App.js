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
import CityLocation from './CityLocation.js';




export default class App extends Component {
  constructor(props) {
    super(props);


  }

  render() {

    return(
      <View>
        <CityLocation />
      </View>
    )
  }
}
