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
    this.state = {
      breweries: ds.cloneWithRows(['row 1', 'row 2'])
    }
    axios.get('http://api.brewerydb.com/v2//breweries?key=71adb5730d8b61f38b3894fa400f85a7')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })

  }
  render(){
    return(
      <View>
        <ListView
        dataSource={this.state.breweries}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    )
  }
}
