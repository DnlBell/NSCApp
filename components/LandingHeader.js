import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import DropMenu from './DropMenu';


class LandingHeader extends Component {

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
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.seachButtonText}>Search</Text>
            </TouchableOpacity>
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
        flexDirection:'row',
        color:'#fff',
        textAlign:'center',
        fontSize: 40,
    },
    heroLine2: {
        flex: 1,
        flexDirection:'row',
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
        flexDirection:'row',
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

export default LandingHeader