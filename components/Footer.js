import React, {Component} from 'react'
import { StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Link } from 'react-router-native';

var screenWidth = Dimensions.get('window').width;

class Footer extends Component {
    render(){
        return (
            <View style={styles.navBar}>
                <Link to="/" underlayColor="#f0f4f7" >
                    <View style={styles.navButton}>
                        <Text style={styles.navText}>Home</Text>
                    </View>
                </Link>                
                <Link to="/search" underlayColor="#f0f4f7" >
                    <View style={styles.navButton}>
                        <Text style={styles.navText}>Search</Text>
                    </View>
                </Link>                
                <Link to="/profile" underlayColor="#f0f4f7" >
                    <View style={styles.navButton}>
                        <Text style={styles.navText}>Profile</Text>
                    </View>
                </Link>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navBar:{
        alignSelf:'flex-end',
        justifyContent:'space-evenly',
        flexDirection: 'row',
        width:screenWidth,
        backgroundColor: '#FF6622',
    },
    navButton:{
        padding:18
    },
    navText: {
        color: '#fff'
    }


});

export default Footer;