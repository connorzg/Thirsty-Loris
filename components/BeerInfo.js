import React, {Component} from 'react';
import _ from 'lodash';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Switch,
  Text,
  Image
} from 'react-native';
import {ListView} from 'realm/react-native';
import NavBar from './NavBar';

export default class BeerInfo extends Component {
  render() {

    if (this.props.beerObject.labels) {
      imgUrl = { uri: this.props.beerObject.labels.large }
    } else {
      imgUrl = require('../images/Beer-icon.png');
    }

    if (!this.props.beerObject.description) {
      this.props.beerObject.description = "No description found"
    }

    const beer = this.props.beerObject;
    console.log(imgUrl);
    return (
      <View>
      <View style={styles.container}>
        <View style={styles.infoRow}>
          <Image style={styles.image} source={imgUrl}/>
          <View style={styles.infoText}>
            <Text style={styles.name}>{beer.name}</Text>
            <Text style={styles.type}>{beer.style.name}</Text>
            <Text style={styles.num}>ABV: {beer.abv}</Text>
            <Text style={styles.num}>IBU: {beer.ibu}</Text>
          </View>
        </View>

        <Text style={styles.description}>{beer.description}</Text>

      </View>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 100,
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 35
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 50
  },
  num: {
    fontFamily: 'Raleway'
  }
})
