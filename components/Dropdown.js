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
        // selectedValue={this.state.searchTerm}
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
  searchBar: {
    borderWidth: 1,
    flex: 1,
    borderColor: 'black',
    color: 'white',
    backgroundColor: 'white',
  },
  dropdownContainer: {
  }
})
