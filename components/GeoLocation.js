import React, {Component} from 'react';
import {
  ListView,
  PixelRatio,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class GeoLocation extends Component{
  constructor(props) {
    super(props)
  this.state = {
   currentLatitude: '',
   currentLongitude: '',
 }
 this._getLocation = this._getLocation.bind(this)
 this._locationAPI = this._getLocation.bind(this)
 }

 watchID: ?number = null;

 _getLocation() {
   navigator.geolocation.getCurrentPosition(
     (position) => {
       latitude = position.coords.latitude
       longitude = position.coords.longitude
       var currentLatitude = JSON.stringify(latitude);
       var currentLongitude = JSON.stringify(longitude);
       this.setState({
         currentLatitude: currentLatitude,
         currentLongitude: currentLongitude
       });
       this._locationAPI()
     },
     (error) => alert(JSON.stringify(error))
   );
 }

 _locationAPI() {
   const dataSource = new ListView.DataSource({
     rowHasChanged: (r1,r2) => r1 !== r2
   })
   this.state = {
     breweries: dataSource.cloneWithRows([])
   }
   fetch('https://api.brewerydb.com/v2/beers?order=random&randomCount=10&key=71adb5730d8b61f38b3894fa400f85a7').then((response) => response.json())
   .then((responseText) => {
     this.setState({
       breweries: dataSource.cloneWithRows(responseText.data)
     })
   })
   .catch(function (error) {
     console.log(error);
   });
 }

 componentWillUnmount() {
   navigator.geolocation.clearWatch(this.watchID);
 }

 render() {
   return (
     <View>
      <Text>Stupid</Text>
      <Text>Stupid</Text>
      <Text>Stupid</Text>
      <Text>Stupid</Text>
      <Text>Stupid</Text>
      <Text>Stupid</Text>
      <TouchableHighlight onPress={this._getLocation}>
       <Text>
        Search near me:
        {this.state.currentLatitude}
        {this.state.currentLongitude}
       </Text>
       </TouchableHighlight>
     </View>
   );
 }
}
