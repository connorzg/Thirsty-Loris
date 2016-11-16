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
        <TextInput placeholder="hello" style={styles.searchBar}
        onSubmitEditing={this.props.searchBarSubmit} onChangeText={this.props.onChangeText}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 100,
    borderRadius: 5
  }
})
