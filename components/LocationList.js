import React, {Component} from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';
import {ListView} from 'realm/react-native';
import Beer from './Beer.js';
import BeerList from './BeerList.js';

export default class LocationList extends Component{
  constructor(props){
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })
    this.state = {
      beers: dataSource.cloneWithRows([])
    }
    this._getBreweries = this._getBreweries.bind(this);
    this._renderBeers = this._renderBeers.bind(this);
  }
  _getBreweries(){
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })
    var searchString = `https://api.brewerydb.com/v2/beers?styleid=${this.props.location}&key=71adb5730d8b61f38b3894fa400f85a7`;
    fetch(searchString).then((response) => response.json())
    .then((responseText) => {
      this.setState({
        beers: dataSource.cloneWithRows(responseText.data)
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  _renderBeers(beerObject){
    return(
      <Beer beerObject={beerObject} />
    )

  }
  componentDidMount(){
    this._getBreweries();
  }
  render(){
    return(
      <View>
        <BeerList
          beers={this.state.beers}
          navigator={this.props.navigator}
        />
      </View>
    )
  }
}
