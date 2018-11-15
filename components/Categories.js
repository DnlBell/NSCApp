import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from '../styles/Catagories'

class Categories extends React.Component{

    constructor() {
        super()
        this.state = {
            catagory : [
                'Academics',
                'Arts & crafts',
                'Camps',
                'Dance & Music',
                'Food & Drink',
                'Health & Well-Being',
                'Home & Gardening',
                'Language, Writing & Humanities',
                'Lifestyle & Leisure',
                'Sports & Activities',
                'Tech & Professional Development',
                'Theater, Film & Television'
            ],
            categoriesView : []
        }

        for(let i = 0; i < this.state.catagory.length; i++){
            this.state.categoriesView.push(
                <View key = {i}>        
                    <TouchableOpacity style = {styles.card}>
                        <Text style ={styles.cardText}>{this.state.catagory[i]}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    render() {
        return(
            <View>
                <Text style = {styles.text}>Explore Our Categories</Text>
                {this.state.categoriesView}
            </View>
        )
    
    }
}

export default Categories;