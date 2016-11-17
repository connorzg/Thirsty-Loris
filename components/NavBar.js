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
          <Text style={styles.navText}>NEAR ME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nav} onPress={this.props.saved}>
          <Text style={styles.navText}>SAVED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nav} onPress={this.props.tasted}>
          <Text style={styles.navText}>TASTED</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  nav: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    color: '#c34517',
    fontFamily: 'Raleway-bold'
  }
})
