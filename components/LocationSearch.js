import React, {Component} from 'react';
import {
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import LocationList from './LocationList.js';
import BreweryList from './BreweryList.js';

export default class LocationSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: this.props.location,
      locationId: ''
    }
    this._showList = this._showList.bind(this);
  }
  _searchLocations(){
    var searchString =
   `https://api.brewerydb.com/v2/locations?locality=${this.state.searchTerm}&key=71adb5730d8b61f38b3894fa400f85a7&`;
    fetch(searchString, {
      params: {
      }
    }).then((response) => response.json())
    .then((responseText) => {
      if (responseText.data.length > 0) {
        let newLocationId = responseText.data[2].id;
        let newLocationName = responseText.data[2].name;
        console.log(searchString);
        this.setState({
          searchTerm: newLocationName,
          locationId: newLocationId
        })
        //this._showList();
      } else {
        this.setState({
          searchTerm: 'No results found.',
          locationId: ''
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  _showList(){
    if (this.state.locationId === ''){
      return (<Text>Beers loading...</Text>);
    } else {
      return (<BreweryList breweryid={this.state.locationId} />);
    }

  }
  componentWillMount(){
    this._searchLocations();
  }

  render(){
    let listDisplay = this._showList();
    return(
      <View>
        <Text>{this.state.searchTerm}</Text>
        <View>{listDisplay}</View>
      </View>
    )
  }
}
