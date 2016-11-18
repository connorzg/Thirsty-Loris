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
  }
  _getBreweries(){
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })
    let breweryData = this.props.breweryid;
    let beerData = [];
    let newBeerData = [];
    for (var i = 0; i < this.props.brewerycount; i++) {
      var beersearchString = `https://api.brewerydb.com/v2/brewery/${this.props.breweryid[i]}/beers?key=71adb5730d8b61f38b3894fa400f85a7`;
      console.log(beersearchString);
      fetch(beersearchString).then((response) => response.json())
      .then((responseText) => {
        if (responseText.data){
          newBeerData = beerData.concat(responseText.data);
          this.setState({
            beers: dataSource.cloneWithRows(newBeerData)
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
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
