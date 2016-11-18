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
import Spinner from 'react-native-loading-spinner-overlay';


export default class BrewerySearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: this.props.brewery,
      currentBrewery: '0',
      visible: false
    }
    this._showList = this._showList.bind(this);
  }
  _searchBreweries(){
    this.setState({
      visible: !this.state.visible
    })
    var searchString = `https://api.brewerydb.com/v2/search?type=brewery&q=${this.state.searchTerm}&key=71adb5730d8b61f38b3894fa400f85a7&`;
    fetch(searchString, {
      params: {
      }
    }).then((response) => response.json())
    .then((responseText) => {
      if (responseText.data.length > 0) {
        let newBrewId = responseText.data[0].id;
        let newBrewName = responseText.data[0].name;
        this.setState({
          searchTerm: newBrewName,
          currentBrewery: newBrewId,
          visible: !this.state.visible
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
      return (<BreweryList
        navigator={this.props.navigator}
        breweryid={this.state.currentBrewery} />);
    }

  }
  componentWillMount(){
    this._searchBreweries();
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
