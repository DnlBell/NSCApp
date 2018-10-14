import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

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

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#5E5E5E',
        alignItems: 'center',
        marginTop: 16,
        marginLeft: 12,
        marginRight: 12,
        padding: 30
    },
    cardText:{
        color:'#fff'
    },
    text:{
        color:'#5E5E5E',
        textAlign: 'center',
        fontSize: 22,
        margin: 16
    }
})


export default Categories;