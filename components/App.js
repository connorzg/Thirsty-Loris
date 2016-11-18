import React, {Component} from 'react';
import {
  Image,
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
import SearchButton from './SearchButton.js';
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
      dropdownTerm: 'Beer',
      hideNavBar: true
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
    this._resetSearch = this._resetSearch.bind(this)
  }

  _nearMePress() {
    this.props.navigator.push({
      barTintColor: '#f7b20a',
      title: 'Random List',
      component: RandomList
    })
  }

  _savedPress() {
    this.props.navigator.push({
      barTintColor: '#f7b20a',
      title: 'Saved List',
      component: SavedList
    })
  }

  _tastedPress() {
    this.props.navigator.push({
      barTintColor: '#f7b20a',
      title: 'Tried List',
      component: TriedList
    })
  }
  _resetSearch() {
    this.setState({
      searchTerm: ''
    })
  }
  _typeSearch() {
    this.props.navigator.push({
      barTintColor: '#f7b20a',
      title: this.state.searchTerm ,
      component: TypeSearch,
      passProps: {
        type: this.state.searchTerm
      }
    })
    this._resetSearch()
  }

  _brewerySearch() {
    this.props.navigator.push({
      barTintColor: '#f7b20a',
      title: this.state.searchTerm ,
      component: BrewerySearch,
      passProps: {
        brewery: this.state.searchTerm
      }
    })
    this._resetSearch()
  }

  _ABVSearch() {
    this.props.navigator.push({
      barTintColor: '#f7b20a',
      title: this.state.searchTerm ,
      component: ABVSearch,
      passProps: {
        abvvalue: this.state.searchTerm
      }
    })
    this._resetSearch()
  }

  _locationSearch() {
    this.props.navigator.push({
      barTintColor: '#f7b20a',
      title: this.state.searchTerm ,
      component: LocationSearch,
      passProps: {
        location: this.state.searchTerm
      }
    })
    this._resetSearch()
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
  }

  render() {
    return(
      <View style={styles.container}>
        <Image source={require('../images/BeerBackground.png')} style={styles.backgroundImage}>
          <View style={styles.topHalf}></View>
          <View style={styles.bottomHalf}>
            <SearchBar searchBarSubmit={this._handleSearchSubmit} onChangeText={this._onChangeText} value={this.state.searchTerm}/>
            <Dropdown handleSearch={this._handleDropdownSelect} selectedValue={this.state.dropdownTerm}/>
            <SearchButton search={this._handleSearchSubmit}/>
          </View>
          <View style={styles.nav}>
            <NavBar nearMe={this._nearMePress} saved={this._savedPress} tasted={this._tastedPress}/>
          </View>
        </Image>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(239,179,72)'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: null,
    width: null
  },
  topHalf: {
    flex: 8
  },
  bottomHalf: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30
  },
  nav: {
    flex: 1
  }
})
