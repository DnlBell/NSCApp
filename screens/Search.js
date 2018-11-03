//package imports
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
//app imports
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Footer from '../components/Footer';

class Search extends Component {
  render() {
    return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.searcherFrame}>
          <Searcher />
        </View>
      </ScrollView>
      <Footer />
    </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
      flex:1,
  },
  searcherFrame: {
      backgroundColor: '#5E5E5E'
  }
});

export default Search;

