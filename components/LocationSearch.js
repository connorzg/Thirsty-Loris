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
      currentBrewery: [],
      breweryCount: ''
    }
    this._showList = this._showList.bind(this);
  }
  _searchLocations(){
    let currentBreweries = this.state.currentBrewery;
    var searchString =
   `https://api.brewerydb.com/v2/locations?locality=${this.state.searchTerm}&key=71adb5730d8b61f38b3894fa400f85a7&`;
   fetch(searchString, {
     params: {
     }
   }).then((response) => response.json())
   .then((responseText) => {
     if (responseText.data.length > 0) {
       let responseArray = responseText.data;
       responseArray.map((responseitem, index) => {
           currentBreweries.push(responseitem.id);
         })
       let breweryCount = currentBreweries.length;
       this.setState({
         currentBrewery: currentBreweries,
         breweryCount: breweryCount
       })
     } else {
       this.setState({
         searchTerm: 'No results found.'
       })
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  _showList(){
    if (this.state.currentBrewery.length < 1){
      return (<Text>Beers loading...</Text>);
    } else {
      console.log("cow");
      return (<BreweryList
        navigator={this.props.navigator}
        breweryid={this.state.currentBrewery}
        brewerycount = {this.state.breweryCount} />);
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
