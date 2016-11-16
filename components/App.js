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
import TriedList from './TriedList.js';
import ABVSearch from './ABVSearch.js';
import SavedList from './SavedList.js';
import RandomList from './RandomList.js';
import TypeSearch from './TypeSearch.js';
import BrewerySearch from './BrewerySearch.js';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
    this._nearMePress = this._nearMePress.bind(this)
    this._savedPress = this._savedPress.bind(this)
    this._tastedPress = this._tastedPress.bind(this)
  }

  _nearMePress() {
    this.props.navigator.push({
      title: 'Tried List',
      component: TriedList
    })
  }
  _savedPress() {
    this.props.navigator.push({
      title: 'Saved List',
      component: SavedList
    })
  }
  _tastedPress() {
    this.props.navigator.push({
      title: 'Random List',
      component: RandomList
    })
  }

  render() {
    return(

      <View style={styles.container}>
        <SearchBar />
        <Dropdown />
        <NavBar nearMe={this._nearMePress} saved={this._savedPress} tasted={this._tastedPress}/>
      </View>

    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
