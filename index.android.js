/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

var AwesomeProject = React.createClass({
   render: function() {
    return (
      <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>

      </View>
    );
  }
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
