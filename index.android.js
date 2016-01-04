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
  getImage: function(tid){
    fetch('https://face.ersansan.cn/collection/'+tid)
    .then((respose) => respose.text())
    .then((responseText) => {
          var result = eval('(' + responseText +     ')');
          var list = result.picList;
          for(var i=0;i<list.length;i++){
            var item = list[i];
            console.warn(item.link);
          }
    })
    .catch((error) => {
      console.warn(error);
    }).done;
  },
  getSunCollection: function(tid){
    fetch('https://face.ersansan.cn/collection/'+tid)
    .then((respose) => respose.text())
    .then((responseText) => {
          var result = eval('(' + responseText +     ')');
          var list = result.subcollection;
          for(var i=0;i<list.length;i++){
            var item = list[i];
            this.getImage(item.tid);
          }
    })
    .catch((error) => {
      console.warn(error);
    }).done;
  },
  _downLoad: function(){
      fetch('https://face.ersansan.cn/collection')
      .then((respose) => respose.text())
      .then((responseText) => {
            var result = eval('(' + responseText +     ')');
            var list = result.List;
            for(var i=0;i<list.length;i++){
              var item = list[i];
              console.warn(item.tid+item.title);
              this.getSunCollection(item.tid);
            }
      })
      .catch((error) => {
        console.warn(error);
      }).done;
  },
  render: function() {
    return (
      <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity style={{
           backgroundColor:"##234234", height:50, width:80,  alignItems:'center',  justifyContent:'center'
         }} onPress={ this._downLoad }>
          <Text style={{ fontSize:20,  color:'white' }}>下载</Text>
         </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
