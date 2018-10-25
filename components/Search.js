import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Searcher from './Searcher';


export default class Search extends Component {
  render() {
    return (
    <View style={styles.searcherBox}>
     <Searcher />
    </View>
    );
  }
};



const styles = StyleSheet.create({
    searcherBox:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    }
});
