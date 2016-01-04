/**
 * 鬼畜表情
 * https://github.com/hakns-zyh
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  ListView,
} = React;

var MainView = React.createClass({

  render: function() {
    return (
      <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
        <ScrollView>
          <Image source={{ uri: 'http://face.ersansan.cn/Public/pic/banner/hongbao.jpg' }} style={styles.topImage}/>
          <ListView>
          </ListView>
        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({

  topImage：{
    height:100,
  }，
});

module.exports=MainView;
