import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

class MarketingBar extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.marketingText}>Offer your own classes on Mindspand!</Text>
                <TouchableHighlight style={styles.marketingButton}>
                    <Text>Learn more</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FF6622',
        alignItems: 'center'
    },
    marketingText:{
        color:'#fff',
        fontSize: 18,
        margin: 8
    },
    marketingButton: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 18,
        marginLeft: 12,
        marginRight: 12,
        padding: 18,
        width:200
    }
})

export default MarketingBar