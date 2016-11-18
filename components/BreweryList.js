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

export default class BreweryList extends Component{
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
    var searchString = `https://api.brewerydb.com/v2/brewery/${this.props.breweryid}/beers?key=71adb5730d8b61f38b3894fa400f85a7`;
    //console.log(this.props.breweryid);
    console.log(searchString);
    fetch(searchString).then((response) => response.json())
    .then((responseText) => {
      if (responseText.data) {
        this.setState({
          beers: dataSource.cloneWithRows(responseText.data)
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  _renderBeers(beerObject){
    return(
      <Beer beerObject={beerObject} navigator={this.props.navigator}/>
    )

  }
  componentDidMount(){
    this._getBreweries();
  }
  render(){
    return(
      <View>
        <BeerList
          navigator={this.props.navigator}
          beers={this.state.beers}
        />
      </View>
    )
  }
}
