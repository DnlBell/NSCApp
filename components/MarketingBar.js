import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/MarketingBar';

class MarketingBar extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.marketingText}>Offer your own classes on Mindspand!</Text>
                <TouchableOpacity style={styles.marketingButton}>
                    <Text>Learn more</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default MarketingBar;