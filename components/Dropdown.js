import React, {Component} from 'react';
import {
  PickerIOS,
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
        <PickerIOS
        style={styles.dropdown}
        selectedValue={'Beer'}
        onValueChange={this.props.handleSearch}
        // selectedValue={this.props.handleSearch}
        >
          <PickerIOS.Item label="Beer" value="Beer" />
          <PickerIOS.Item label="Brewery" value="Brewery" />
          <PickerIOS.Item label="ABV" value="ABV" />
          <PickerIOS.Item label="Location" value="Location" />
        </PickerIOS>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  searchBar: {
    borderWidth: 1,
    borderColor: 'black',
    color: 'white',
    backgroundColor: 'white',
  },
  dropdownContainer: {
  }
})
