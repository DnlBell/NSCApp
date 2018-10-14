import React, {Component} from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import DropMenu from './DropMenu';


class Landing extends Component {

    render () {
        return(
        <View style={styles.container}>
            <DropMenu />
            <View style={styles.heroTextFrame}>
                <Text style={styles.heroLine1}>Grow your Mind.</Text>
                <Text style={styles.heroLine2}>Expand your World.</Text>
            </View>
            <TextInput style={styles.inputText}>cata</TextInput>
            <TextInput style={styles.inputText}>loc</TextInput>
            <TouchableHighlight style={styles.searchButton}>
                <Text>Search</Text>
            </TouchableHighlight>
        </View>
        )
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3'
    },
    heroLine1: {
        flex: 1,
        flexDirection:'row',
        textAlign:'center',
        fontSize: 40,
    },
    heroLine2: {
        flex: 1,
        flexDirection:'row',
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
        flexDirection:'row',
        backgroundColor: '#fff',
        marginBottom: 8,
        marginLeft: 12,
        marginRight: 12,
        padding: 18
    },
    searchButton : {
        backgroundColor: '#FF6622',
        marginBottom: 18,
        marginLeft: 12,
        marginRight: 12,
        padding: 18
    },
    marketingBar: {
        backgroundColor: '#FF6622',
    },
    marketingText:{

    },
    marketingButton: {
        backgroundColor: '#fff',
    }

})

export default Landing