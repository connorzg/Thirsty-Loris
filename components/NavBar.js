import React, {Component} from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import BrewerySearch from './BrewerySearch.js';

export default class NavBar extends Component{
  render(){
    return(
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.nav} onPress={this.props.nearMe}>
          <Text>NEAR ME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nav} onPress={this.props.saved}>
          <Text>SAVED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nav} onPress={this.props.tasted}>
          <Text>TASTED</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15
  },
  nav: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
