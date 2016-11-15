<<<<<<< HEAD
import React, {Component} from 'react';
import {
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

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
    //var searchString = 'https://api.brewerydb.com/v2/brewery/YXDiJk/beers?key=71adb5730d8b61f38b3894fa400f85a7';
    var searchString = `https://api.brewerydb.com/v2/brewery/${this.props.breweryid}/beers?key=71adb5730d8b61f38b3894fa400f85a7`;
    console.log(this.props.breweryid);
    console.log(searchString);
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
  componentDidMount(){
    this._getBreweries();
  }
  render(){
    return(
      <View>
        <ListView
        enableEmptySections={true}
        dataSource={this.state.beers}
        renderRow={(rowData) => <Text>{rowData.name}</Text>}
        />
      </View>
    )
  }
}
