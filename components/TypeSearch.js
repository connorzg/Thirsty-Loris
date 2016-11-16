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
import TypeList from './TypeList.js';

export default class TypeSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: 'Pale',
      styleId: '0'
    }
    this._showList = this._showList.bind(this);
  }
  _searchTypes(){
    var searchString = `https://api.brewerydb.com/v2/styles?name=${this.state.searchTerm}&key=71adb5730d8b61f38b3894fa400f85a7&`;
    fetch(searchString, {
      params: {
      }
    }).then((response) => response.json())
    .then((responseText) => {
      //console.log(responseText.data);
      if (responseText.data.length > 0) {
        let newTypeId = responseText.data[0].id;
        let newTypeName = responseText.data[0].name;
        this.setState({
          searchTerm: newTypeName,
          styleId: newTypeId
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
    if (this.state.styleId === '0'){
      return (<Text>Beers loading...</Text>);
    } else {
      return (<TypeList typeid={this.state.styleId} />);
    }

  }
  componentWillMount(){
    this._searchTypes();
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
