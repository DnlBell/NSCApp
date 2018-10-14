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
                <View>        
                    <TouchableOpacity style = {styles.card}>
                        <Text>{this.state.catagory[i]}</Text>
                    </TouchableOpacity>
                </View>
            )
        }

    }

    render() {
        return(
            <View>
                {this.state.categoriesView}
            </View>
        )
    
    }
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


export default Categories;