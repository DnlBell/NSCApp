import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import Footer from '../components/Footer'; 
import Header from '../components/Header';

export default ({ location }) =>(
            <View style={styles.container}>
                <ScrollView>
                    <Header/>
                    <Text>Purchase</Text>
                </ScrollView>
                <Footer/>
            </View>
        );


const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
