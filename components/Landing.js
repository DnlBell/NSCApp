import React, {Component} from 'react'
import { ScrollView , View, Text, StyleSheet } from 'react-native'
import Header from './Header'
import CourseList from './CourseList'
import MarketingBar from './MarketingBar'
import Categories from './Categories'
import Footer from './Footer'

class Landing extends Component {

    render () {
        return(
        <View style={{flex: 1}}>
            <ScrollView>
                <Header />
                <MarketingBar />
                <Text style = {styles.HighlightTitle}>Recently Added</Text>
                <CourseList />
                <Text style = {styles.HighlightTitle}>Grow My Career</Text>
                <CourseList />
                <Categories />
            </ScrollView>
            <Footer />
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