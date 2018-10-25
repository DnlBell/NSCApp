import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Searcher from './Searcher';


class LandingHeader extends Component {

    render () {
        return(
        <View style={styles.container}>
            <View style={styles.heroTextFrame}>
                <Text style={styles.heroLine1}>Grow your Mind.</Text>
                <Text style={styles.heroLine2}>Expand your World.</Text>
            </View>
            <Searcher />
        </View>
        )
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5E5E5E'
    },
    heroLine1: {
        flex: 1,
        color:'#fff',
        textAlign:'center',
        fontSize: 40,
    },
    heroLine2: {
        flex: 1,
        color:'#fff',
        textAlign:'center',
        fontSize: 40,
        fontWeight: 'bold'
    },
    heroTextFrame: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        padding: 20
    },
    inputText: {
        backgroundColor: '#fff',
        marginBottom: 8,
        marginLeft: 12,
        marginRight: 12,
        padding: 18
    },
    searchButton : {
        backgroundColor: '#FF6622',
        alignItems: 'center',
        marginBottom: 30,
        marginLeft: 12,
        marginRight: 12,
        padding: 18
    },
    seachButtonText: {
        color:'#fff',
        fontSize:24
    }
})

export default LandingHeader;