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
import BrewerySearch from './BrewerySearch.js';
import ABVSearch from './ABVSearch.js';
import LocationSearch from './LocationSearch.js';
import TriedList from './TriedList.js';
import SavedList from './SavedList.js';
import RandomList from './RandomList.js';
import TypeSearch from './TypeSearch.js';

// Amber- #c34517
// Blonde- #f7b20a
// Foam- #cac9cf
// Glass- #ffffff

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      dropdownTerm: ''
    }
    this._nearMePress = this._nearMePress.bind(this)
    this._savedPress = this._savedPress.bind(this)
    this._tastedPress = this._tastedPress.bind(this)
    this._typeSearch = this._typeSearch.bind(this)
    this._brewerySearch = this._brewerySearch.bind(this)
    this._ABVSearch = this._ABVSearch.bind(this)
    this._locationSearch = this._locationSearch.bind(this)
    this._onChangeText = this._onChangeText.bind(this)
    this._handleSearchSubmit = this._handleSearchSubmit.bind(this)
    this._handleDropdownSelect = this._handleDropdownSelect.bind(this)
  }

  _nearMePress() {
    this.props.navigator.push({
      title: 'Random List',
      component: RandomList
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
      title: 'Tried List',
      component: TriedList
    })
  }

  _typeSearch() {
    this.props.navigator.push({
      title: this.state.searchTerm ,
      component: TypeSearch,
      passProps: {
        type: this.state.searchTerm
      }
    })
  }

  _brewerySearch() {
    this.props.navigator.push({
      title: this.state.searchTerm ,
      component: BrewerySearch,
      passProps: {
        brewery: this.state.searchTerm
      }
    })
  }

  _ABVSearch() {
    this.props.navigator.push({
      title: this.state.searchTerm ,
      component: ABVSearch,
      passProps: {
        abvvalue: this.state.searchTerm
      }
    })
  }

  _locationSearch() {
    this.props.navigator.push({
      title: this.state.searchTerm ,
      component: LocationSearch,
      passProps: {
        location: this.state.searchTerm
      }
    })
  }

  _onChangeText(searchTerm) {
    this.setState({searchTerm})
  }

  _handleSearchSubmit() {
    if (this.state.dropdownTerm === 'Beer' ) {
      this._typeSearch()
    } else if (this.state.dropdownTerm === 'Brewery'){
      this._brewerySearch()
    } else if (this.state.dropdownTerm === 'ABV'){
      this._ABVSearch()
    } else if (this.state.dropdownTerm === 'Location'){
      this._locationSearch()
    }
  }

  _handleDropdownSelect(selectedValue) {
    this.setState({
      dropdownTerm: selectedValue
    })
    console.log(this.state.dropdownTerm);
  }

  render() {
    return(
      <View style={styles.container}>
        <SearchBar searchBarSubmit={this._handleSearchSubmit} onChangeText={this._onChangeText}/>
        <Dropdown handleSearch={this._handleDropdownSelect}/>
        <NavBar nearMe={this._nearMePress} saved={this._savedPress} tasted={this._tastedPress}/>
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
