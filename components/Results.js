import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


export default class Results extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>Results</Text>
        </View>
    );
  }
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
});
