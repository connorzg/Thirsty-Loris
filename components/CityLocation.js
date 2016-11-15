import React, {Component} from 'react';
import {
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

export default class Brewery extends Component{
  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })

    this.state = {
      breweries: dataSource.cloneWithRows([]),
      city: ''
    }



    this._search = this._search.bind(this);
    this._handleTextChange = this._handleTextChange.bind(this);
  }

  _search() {

    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })
    fetch('https://api.brewerydb.com/v2/locations?locality=' + this.state.city + '&key=71adb5730d8b61f38b3894fa400f85a7').then((response) => response.json())
    .then((responseText) => {
      console.log(responseText);
      this.setState({
        breweries: dataSource.cloneWithRows(responseText.data),
        city: ''
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  _handleTextChange(city) {
    this.setState({city})
    console.log(this.state.city);
  }

  render(){
    return(
      <View>
        <Text>Stupid</Text>
        <Text>Stupid</Text>
        <Text>Stupid</Text>
        <Text>Stupid</Text>
        <Text>Stupid</Text>
        <TextInput style={styles.textinput} value={this.state.city}
          onChangeText={this._handleTextChange} onSubmitEditing={this._search}/>
        <TouchableHighlight>
          <Text onPress={this._search}>Search</Text>
        </TouchableHighlight>
        <ListView
        enableEmptySections={true}
        dataSource={this.state.breweries}
        renderRow={(rowData) => <Text>{rowData.brewery.name}</Text>}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  textinput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    lineHeight: 12
  }
})
