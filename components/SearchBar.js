import React, {Component} from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

export default class SearchBar extends Component{
  render(){
    return(
      <View style={styles.searchContainer}>
        <TextInput placeholder="hello" style={styles.searchBar}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    marginHorizontal: 100,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    color: 'gray',
    backgroundColor: 'white',
  }
})
