import React, {Component} from 'react';
import {
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View
} from 'react-native';
import axios from 'axios';

export default class BreweryList extends Component{
  constructor(props){
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })
    this.state = {
      breweries: dataSource.cloneWithRows([])
    }
    fetch('https://api.brewerydb.com/v2/beers?order=random&randomCount=10&key=71adb5730d8b61f38b3894fa400f85a7').then((response) => response.json())
    .then((responseText) => {
      console.log(responseText);
      this.setState({
        breweries: dataSource.cloneWithRows(responseText.data)
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render(){
    return(
      <View>
        <ListView
        dataSource={this.state.breweries}
        renderRow={(rowData) => <Text>{rowData.name}</Text>}
        />
      </View>
    )
  }
}
