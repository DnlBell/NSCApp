import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Footer from './Footer'; 
import Header from './Header';

export default class Results extends Component {
  render() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Header/>
                <Text>Results</Text>
            </ScrollView>
            <Footer/>
        </View>
    );
  }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
