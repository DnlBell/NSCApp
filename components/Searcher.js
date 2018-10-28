import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width - 18;

export default class Searcher extends Component {
  render() {
    return (
      <View>
        <TextInput style={styles.inputText}>cata</TextInput>
        <TextInput style={styles.inputText}>loc</TextInput>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.seachButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
inputText: {
  backgroundColor: '#fff',
  marginBottom: 8,
<<<<<<< HEAD
=======
  marginLeft: 9,
>>>>>>> 61edecb37430f5e3ff9a31aab20401a6bea2f7ea
  width: width,
  padding: 18
},
searchButton : {
  backgroundColor: '#FF6622',
  alignItems: 'center',
  marginBottom: 30,
<<<<<<< HEAD
=======
  marginLeft: 9,
>>>>>>> 61edecb37430f5e3ff9a31aab20401a6bea2f7ea
  width: width,
  padding: 18
},
seachButtonText: {
  color:'#fff',
  fontSize:24
},
});