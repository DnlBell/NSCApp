import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Searcher from './Searcher';


class Header extends Component {

    render () {
        return(
        <View style={styles.head}>
            <View style={styles.heroTextFrame}>
                <Text style={styles.heroLine1}>Grow your Mind.</Text>
                <Text style={styles.heroLine2}>Expand your World.</Text>
            </View>
        </View>
        )
    }    
}

const styles = StyleSheet.create({
    head: {
        flex: 1,
        paddingTop:18,
        paddingBottom:18,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#5E5E5E'
    },
    heroLine1: {
        color:'#fff',
        fontSize: 40,
    },
    heroLine2: {
        color:'#fff',
        fontSize: 40,
        fontWeight: 'bold'
    },
    heroTextFrame: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 20,
        marginBottom: 20
    }
})

export default Header;