import React, {Component} from 'react';
import _ from 'lodash';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Switch,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {ListView} from 'realm/react-native';
import NavBar from './NavBar';
import realm from '../utils/realm.js';

export default class BeerInfo extends Component {
  constructor() {
    super()

    this._addSaved = this._addSaved.bind(this);
    this._addTried = this._addTried.bind(this);
  }



  _addSaved() {
    // console.log('Save');
    realm.write(() => {
      if (!this.props.beerObject.labels) this.props.beerObject.labels = ''
      if (!this.props.beerObject.name) this.props.beerObject.name = ''
      if (!this.props.beerObject.ibu) this.props.beerObject.ibu = ''

      console.log(this.props.beerObject);

      let saved = realm.create('Beer', {
        id: this.props.beerObject.id,
        brewery: this.props.beerObject.breweries[0].name,
        name: this.props.beerObject.name,
        image: (this.props.beerObject.labels.large || this.props.beerObject.labels.medium || ''),
        abv: this.props.beerObject.abv,
        ibu: this.props.beerObject.ibu,
        type: this.props.beerObject.style.name,
        description: this.props.beerObject.description,
        list: 'saved',
      });
    });
  }

  _addTried() {
    if (!this.props.beerObject.labels) this.props.beerObject.labels = ''
    if (!this.props.beerObject.name) this.props.beerObject.name = ''
    if (!this.props.beerObject.ibu) this.props.beerObject.ibu = ''

    realm.write(() => {
      let saved = realm.create('Beer', {
        id: this.props.beerObject.id,
        brewery: this.props.beerObject.breweries[0].name,
        name: this.props.beerObject.name,
        image: (this.props.beerObject.labels.large || this.props.beerObject.labels.medium || ''),
        abv: this.props.beerObject.abv,
        ibu: this.props.beerObject.ibu || '',
        type: this.props.beerObject.style.name,
        description: this.props.beerObject.description,
        list: 'tried',
      });
    });
  }

  render() {
    const beer = this.props.beerObject;

    if (this.props.beerObject.labels) {
      imgUrl = { uri: this.props.beerObject.labels.large }
    } else {
      imgUrl = require('../images/Beer-icon.png');
    }

    if (!this.props.beerObject.description) {
      this.props.beerObject.description = "No description found"
    }

    console.log(beer);
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
        <TouchableOpacity onPress={this._addSaved}>
          <Text>Add To Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._addTried}>
          <Text>Add To Tried</Text>
        </TouchableOpacity>
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
