import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import Footer from '../components/Footer'; 
import Header from '../components/Header';

export default () =>(
    <View style={styles.container}>
        <ScrollView>
            <Header/>
            <Text>Cart</Text>
        </ScrollView>
        <Footer/>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});