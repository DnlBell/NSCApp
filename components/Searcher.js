import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import { Link } from 'react-router-native';

var width = Dimensions.get('window').width - 18;

export default class Searcher extends Component {
  render() {
    return (
      <View>
        <TextInput style={styles.inputText}>cata</TextInput>
        <TextInput style={styles.inputText}>loc</TextInput>
        <Link to = "/results" component={TouchableOpacity} style={styles.searchButton}>
          <Text style={styles.seachButtonText}>Search</Text>
        </Link>
      </View>
    );
  }
};

const styles = StyleSheet.create({
inputText: {
  backgroundColor: '#fff',
  marginBottom: 8,
  marginLeft: 9,
  width: width,
  padding: 18
},
searchButton : {
  backgroundColor: '#FF6622',
  alignItems: 'center',
  marginBottom: 30,
  marginLeft: 9,
  width: width,
  padding: 18
},
seachButtonText: {
  color:'#fff',
  fontSize:24
},
});