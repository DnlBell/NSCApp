import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";

import Searcher from './Searcher';
import Footer from './Footer';

var width = Dimensions.get('window').width;


class Search extends Component {
  render() {
    return (
    <View style={{flex:1}}>
      <ScrollView>
        <Searcher />
      </ScrollView>
      <Footer />
    </View>
    );
  }
};

const styles = StyleSheet.create({
    
});


export default Search;

