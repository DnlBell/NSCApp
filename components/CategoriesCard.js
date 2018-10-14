import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoriesCard = () => {
    return(
            <TouchableOpacity style = {styles.card}>
                <Text>category</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#FF6622',
        alignItems: 'center',
        marginTop: 16,
        marginLeft: 12,
        marginRight: 12,
        padding: 30
    }
})

export default CategoriesCard;