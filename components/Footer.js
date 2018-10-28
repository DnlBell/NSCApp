import React, {Component} from 'react'
import { StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Link } from 'react-router-native';

var screenWidth = Dimensions.get('window').width;

class Footer extends Component {

    render(){
        return (
            <View style={styles.navBar}>
                <View>
                    <Link to="/" underlayColor="#f0f4f7" >
                        <Text>Home</Text>
                    </Link>
                </View>
                <View>
                    <Link to="/search" underlayColor="#f0f4f7" >
                        <Text>Search</Text>
                    </Link>
                </View>
                <View>
                    <Link to="/profile" underlayColor="#f0f4f7" >
                        <Text>Profile</Text>
                    </Link>
                </View>
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

    }


});

export default Footer;