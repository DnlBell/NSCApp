import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import Footer from '../components/Footer'; 
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import SearchResults from '../components/Course/SearchResults';

/*
export default ({ location }) =>(
    <View style={styles.container}>
        <ScrollView>
            <Header/>
            <View style={styles.searcherFrame}>
                <Searcher />
            </View>
            <Text>{JSON.stringify(location.state)}</Text>
        </ScrollView>
        <Footer/>
    </View>
);
*/

const Results = (props) => {
    return (
    <View style={styles.container}>
        <ScrollView>
            <Header/>
            <View style={styles.searcherFrame}>
                <Searcher />
            </View>
           <View>
               <SearchResults
                   courses={props.searchResultsCourses}
                   partners={props.searchResultsPartners}
               />
           </View>
        </ScrollView>
        <Footer/>
    </View>
);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    searcherFrame: {
        backgroundColor: '#5E5E5E'
    }
});

export default Results;