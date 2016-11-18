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
        <TextInput
        placeholder="Tap to Search"
        value={this.props.value}
        style={styles.searchBar}
        onSubmitEditing={this.props.searchBarSubmit} onChangeText={this.props.onChangeText}
        onPress={this.props.clearText}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 115,
    borderRadius: 5,
    height: 30
  },
  searchBar: {
    flex: 1,
    height: 30,
    width: 115,
    color: '#c34517',
    textAlign: 'center',
    fontFamily: 'Raleway'
  }
})
