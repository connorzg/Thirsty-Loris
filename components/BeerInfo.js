import React, {Component} from 'react';
import _ from 'lodash';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Switch,
  Text
} from 'react-native';
import {ListView} from 'realm/react-native';

export default class BeerInfo extends Component {
  render() {
    var beer = this.props.beerObject;
    return(
      <View style={styles.container}>
        <Text style={styles.name}>{beer.name}</Text>
        <Text style={styles.abv}>{beer.abv}</Text>
        <Text style={styles.description}>{beer.description}</Text>
        <Text style={styles.type}>{beer.style.name}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
