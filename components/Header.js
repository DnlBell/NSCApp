import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/Header'

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

export default Header;