import React, {Component} from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import DropMenu from './DropMenu';


class Landing extends Component {

    render () {
        return(
        <View style={styles.container}>
            <DropMenu />
            <Text>Do things, Things are good.</Text>
            <TextInput>cata</TextInput>
            <TextInput>loc</TextInput>
        </View>
        )
    }    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }

})

export default Landing