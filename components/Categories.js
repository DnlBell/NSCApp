import React from 'react';
import { View } from 'react-native';
import CategoriesCard from './CategoriesCard'

class Categories extends React.Component{

    render() {

        return(
            <View>
                <CategoriesCard />
                <CategoriesCard />
            </View>
        )
    
    }
}

export default Categories;