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
                        <Text>Home</Text>
                    </View>
                </Link>                
                <Link to="/search" underlayColor="#f0f4f7" >
                    <View style={styles.navButton}>
                        <Text>Search</Text>
                    </View>
                </Link>                
                <Link to="/profile" underlayColor="#f0f4f7" >
                    <View style={styles.navButton}>
                        <Text>Profile</Text>
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
        width:screenWidth
    },
    navButton:{
        padding:18
    }


});

export default Footer;