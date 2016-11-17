import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native'

export default class SearchButton extends Component {
  render() {
    return (
      <View style={styles.searchButton}>
        <TouchableOpacity onPress={this.props.search}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  searchButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchButtonText: {
    fontFamily: 'Raleway'
  }
})
