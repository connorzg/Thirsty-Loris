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
import ABVList from './ABVList.js';

export default class ABVSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '5.2',
      abvValue: ''
    }
    this._showList = this._showList.bind(this);
  }
  _searchAbvValues(){
    let searchAbv = parseFloat(this.state.searchTerm);
    let minAbv = Math.floor(searchAbv)
    let maxAbv = minAbv + 1;
    let totalAbv = minAbv.toString() + "," + maxAbv.toString();
    //console.log(totalAbv);

    this.setState({
      abvValue: totalAbv
    })
  }
  _showList(){
    if (this.state.styleId === ''){
      return (<Text>Beers loading...</Text>);
    } else {
      return (<ABVList abvValue={this.state.abvValue} />);
    }

  }
  componentWillMount(){
    this._searchAbvValues();
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
