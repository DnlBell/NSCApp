import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class MenuBar extends Component {
    render () {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    button: {
        padding: 8,
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
  });

export default MenuBar;