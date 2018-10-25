import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width;

export default class Searcher extends Component {
  render() {
    return (
      <View >
        <TextInput style={styles.inputText} placeholder={'Category'}></TextInput>
        <TextInput style={styles.inputText} placeholder={'Location'}></TextInput>
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
  marginLeft: 9,
  width: width-18,
  padding: 18
},
searchButton : {
  backgroundColor: '#FF6622',
  alignItems: 'center',
  marginBottom: 30,
  marginLeft: 9,
  width: width-18,
  padding: 18
},
seachButtonText: {
  color:'#fff',
  fontSize:24
},
});