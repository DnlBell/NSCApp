import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import {withRouter} from 'react-router-native';

import Footer from '../components/Footer'; 
import Header from '../components/Header';

/* instanbul ignore Purchase */ 
const Purchase = (props) =>(
            <View style={styles.container}>
                <ScrollView>
                    <Header/>
                    <Text>Purchase Complete!</Text>
                    <Text>You purchased a seat in {props.location.state.title}</Text>
                </ScrollView>
                <Footer/>
            </View>
        );


const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});

export default withRouter(Purchase);
