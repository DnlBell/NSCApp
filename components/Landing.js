
import React, {Component} from 'react'
import { View , Text, StyleSheet } from 'react-native'
import LandingHeader from './LandingHeader'
import CourseList from './CourseList'
import MarketingBar from './MarketingBar'
import Categories from './Categories'



class Landing extends Component {

    render () {
        return(
        <View >
            <LandingHeader />
            <MarketingBar />
            <Text style = {styles.HighlightTitle}>Recently Added</Text>
            <CourseList />
            <Text style = {styles.HighlightTitle}>Grow My Career</Text>
            <CourseList />
            <Categories />
        </View>
        )
    }    
}

const styles = StyleSheet.create({
    HighlightTitle: {
        color:'#5E5E5E',
        textAlign: 'center',
        fontSize: 22,
        margin: 16
    },
  });


export default Landing