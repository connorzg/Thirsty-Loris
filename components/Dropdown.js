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
        itemStyle={{
          color: 'white',
          fontWeight: '700',
          fontFamily: 'Raleway-bold'
        }}
        style={styles.dropdown}
        onValueChange={this.props.handleSearch}
        selectedValue={this.props.selectedValue}
        >
          <PickerIOS.Item label="ABV" value="ABV" />
          <PickerIOS.Item label="Brewery" value="Brewery" />
          <PickerIOS.Item label="Type" value="Beer" />
          <PickerIOS.Item label="Location" value="Location" />
        </PickerIOS>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  dropdownContainer: {
    width: 100
  }
})
