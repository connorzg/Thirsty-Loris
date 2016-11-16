import React, {Component} from 'react';
import {
  Picker,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class Dropdown extends Component{
  render(){
    return(
      <View style={styles.dropdownContainer}>
        <Picker
        style={styles.dropdown}
        onValueChange={this.props.handleSearch}
        // onValueChange={(term) => this.setState({searchTerm: term})}
        >
          <Picker.Item label="Beer" value="Beer" />
          <Picker.Item label="Brewery" value="Brewery" />
          <Picker.Item label="ABV" value="ABV" />
          <Picker.Item label="Location" value="Location" />
        </Picker>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
  },
  dropdownContainer: {
    flex: 1
  },
  picker: {
    flex: 1,
    height: 100
  },
  navContainer: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 30
  },
  nav: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10
  }
})
