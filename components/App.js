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
import BrewerySearch from './BrewerySearch.js';
import ABVList from './ABVList.js';
import TriedList from './TriedList.js';
import SavedList from './SavedList.js';
import RandomList from './RandomList.js';
import TypeSearch from './TypeSearch.js';





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
    this._beerList = this._beerList.bind(this)
    this._brewerySearch = this._brewerySearch.bind(this)
    this._ABVList = this._ABVList.bind(this)
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
  _beerList() {
    this.props.navigator.push({
      title: 'Beer List',
      component: BeerList,
      passProps: {
        type: this.state.searchTerm
      }
    })
  }
  _brewerySearch() {
    this.props.navigator.push({
      title: 'Brewery List',
      component: BrewerySearch,
      passProps: {
        brewery: this.state.searchTerm
      }
    })
  }
  _ABVList() {
    this.props.navigator.push({
      title: 'ABV List',
      component: ABVList,
      passProps: {
        abvvalue: this.state.searchTerm
      }
    })
  }


  _handleDropdownSelect(selectedValue) {
    this.setState({
      dropdownTerm: selectedValue
    })
    console.log(this.state.dropdownTerm);
    // if (selectedValue === 'Beer') {
    //   this._beerList()
    // } else if (selectedValue === 'Brewery') {
    //   this._brewerySearch()
    // } else if (selectedValue === 'ABV') {
    //   this._ABVList()
    // }
    // else if (selectedValue === 'Location') {
    //   console.log('Location');
    // }
  }

  render() {
    return(
      <View style={styles.container}>
        <SearchBar />
        <Dropdown handleSearch={this._handleDropdownSelect}/>
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
