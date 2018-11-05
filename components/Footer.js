import React, {Component} from 'react'
import { StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Link } from 'react-router-native';
import styles from '../styles/Footer';
import {Colors} from '../styles/Common'

class Footer extends Component {
    render(){
        return (
            <View style={styles.navBar}>
                <Link to="/">
                    <View style={styles.navButton} underlayColor={Colors.AccentColorLight} >
                        <Text style={styles.navText}>Home</Text>
                    </View>
                </Link>                
                <Link to="/search">
                    <View style={styles.navButton} underlayColor={Colors.AccentColorLight}>
                        <Text style={styles.navText}>Search</Text>
                    </View>
                </Link>                
                <Link to="/profile">
                    <View style={styles.navButton} underlayColor={Colors.AccentColorLight}>
                        <Text style={styles.navText}>Profile</Text>
                    </View>
                </Link>                
            </View>
        )
    }
}
export default Footer;