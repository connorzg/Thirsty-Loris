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
import Spinner from 'react-native-loading-spinner-overlay';


export default class LocationSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: this.props.location,
      locationId: '',
      visible: false
    }
    this._showList = this._showList.bind(this);
  }
  _searchLocations(){
    this.setState({
      visible: !this.state.visible
    })
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
        this.setState({
          searchTerm: newLocationName,
          locationId: newLocationId,
          visible: !this.state.visible
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
      return (<BreweryList navigator={this.props.navigator} breweryid={this.state.locationId} />);
    }

  }
  componentWillMount(){
    this._searchLocations();
  }

  render(){
    let listDisplay = this._showList();
    return(
      <View>
        <View style={{flex: 1}}>
          <Spinner overlayColor={'rgba(0,0,0,0.1)'} color={'#f7b20a'} visible={this.state.visible} />
        </View>
        <Text>{this.state.searchTerm}</Text>
        <View>{listDisplay}</View>
      </View>
    )
  }
}
