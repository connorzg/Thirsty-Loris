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
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {ListView} from 'realm/react-native';
import NavBar from './NavBar';
import realm from '../utils/realm.js';

export default class BeerInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beerName: this.props.beerObject.name
    }

    this._addSaved = this._addSaved.bind(this);
    this._addTried = this._addTried.bind(this);
  }

  _addSaved() {
    realm.write(() => {
      if (!this.props.beerObject.labels)
        this.props.beerObject.labels = ''
      if (!this.props.beerObject.name)
        this.props.beerObject.name = ''
      if (!this.props.beerObject.ibu)
        this.props.beerObject.ibu = ''


      let saved = realm.create('Beer', {
        id: this.props.beerObject.id,
        // brewery: this.props.beerObject.breweries[0].name,
        name: this.props.beerObject.name,
        // labels: (this.props.beerObject.labels.large || this.props.beerObject.labels.medium || ''),
        abv: this.props.beerObject.abv,
        ibu: this.props.beerObject.ibu,
        // type: this.props.beerObject.style.name,
        description: this.props.beerObject.description,
        list: 'saved'
      });
    });
  }

  _addTried() {
    if (!this.props.beerObject.labels)
      this.props.beerObject.labels = ''
    if (!this.props.beerObject.name)
      this.props.beerObject.name = ''
    if (!this.props.beerObject.ibu)
      this.props.beerObject.ibu = ''

    realm.write(() => {
      let saved = realm.create('Beer', {
        id: this.props.beerObject.id,
        // brewery: this.props.beerObject.breweries[0].name,
        name: this.props.beerObject.name,
        // labels: (this.props.beerObject.labels.large || this.props.beerObject.labels.medium || ''),
        abv: this.props.beerObject.abv,
        ibu: this.props.beerObject.ibu || '',
        // type: this.props.beerObject.style.name,
        description: this.props.beerObject.description,
        list: 'tried'
      });
    });
  }

  render() {
    const beer = this.props.beerObject;

    if (!this.props.beerObject.description) {
      this.props.beerObject.description = "No description found"
    }

    if (this.props.beerObject.labels){
      imgUrl = {uri: this.props.beerObject.labels.large};
    } else {
      imgUrl = require('../images/Beer-icon.png');
    }

    var breweryName;
    if (!this.props.beerObject.breweries || this.props.beerObject.breweries === null) {
      var breweryName = '';
    } else {
      var breweryName = this.props.beerObject.breweries[0].name + " Brewery";
    }

    var typeName;
    if (!this.props.beerObject.style || this.props.beerObject.style === null) {
      var typeName = '';
    } else {
      var typeName = "Type: " + this.props.beerObject.style.name;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.infoRow}>
            <Image style={styles.image} source={imgUrl}/>
            <View style={styles.infoText}>
              <Text style={styles.name}>{beer.name}</Text>
              <Text style={styles.info}>{breweryName}</Text>
              <Text style={styles.info}>{typeName}</Text>
              <Text style={styles.num}>ABV: {beer.abv}</Text>
              <Text style={styles.num}>IBU: {beer.ibu}</Text>
            </View>
          </View>

          <Text style={styles.description}>{beer.description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this._addSaved}>
              <Text style={styles.buttonText}>Add To Saved</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this._addTried}>
              <Text style={styles.buttonText}>Add To Tried</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 30,
    alignItems: 'center'
  },
  image: {
    right: 5,
    width: 100,
    height: 100,
    marginRight: 10
  },
  infoRow: {
    flexDirection: 'row',
    bottom: 20
  },
  num: {
    fontFamily: 'Raleway',
    fontWeight: '500'
  },
  description: {
    fontFamily: 'Raleway',
    fontWeight: '500'
  },
  button: {
    backgroundColor: '#c34517',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 15
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Raleway',
    fontWeight: 'bold'
  },
  name: {
    fontFamily: 'ECONOMICA',
    fontWeight: 'bold',
    fontSize: 20
  },
  info: {
    fontFamily: 'Raleway',
    fontWeight: '500'
  }
})
