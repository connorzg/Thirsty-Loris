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
import BreweryList from './BreweryList.js';

export default class BrewerySearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '(512)',
      currentBrewery: '0'
    }
    this._showList = this._showList.bind(this);
  }
  _searchBreweries(){
    var searchString = `https://api.brewerydb.com/v2/search?type=brewery&q=${this.state.searchTerm}&key=71adb5730d8b61f38b3894fa400f85a7&`;
    fetch(searchString, {
      params: {
      }
    }).then((response) => response.json())
    .then((responseText) => {
      //console.log(responseText.data);
      if (responseText.data.length > 0) {
        let newBrewId = responseText.data[0].id;
        let newBrewName = responseText.data[0].name;
        this.setState({
          searchTerm: newBrewName,
          currentBrewery: newBrewId
        })
        //this._showList();
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
    if (this.state.currentBrewery === '0'){
      return (<Text>Beers loading...</Text>);
    } else {
      return (<BreweryList breweryid={this.state.currentBrewery} />);
    }

  }
  componentWillMount(){
    this._searchBreweries();
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

const styles = StyleSheet.create({
  wrapper:{
    height: 100/PixelRatio.get(),
    alignItems: 'center',
    justifyContent: 'center',

  },
  input:{
    backgroundColor: '#ffffff',
    height: 80/PixelRatio.get(),
    width: 600/PixelRatio.get(),
    padding: 10
  },
  button:{
    backgroundColor: '#000066',
    borderBottomWidth: 2,
    borderBottomColor: '#0000dd',
    padding: 20/PixelRatio.get()
  },
  buttontext:{
    color: '#ffffff',
    fontWeight: 'bold',
  },
  listcontainer:{
    flex: 8
  }
})
