import React from 'react';
import { Text, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        width: '8%',
        height: '100%',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
}

export default Card;