import React, {Component} from 'react';
import { ScrollView , View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CourseList from '../components/CourseList';
import MarketingBar from '../components/MarketingBar';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Searcher from '../components/Searcher';

class Landing extends Component {

    render () {
        return(
        <View style={{flex: 1}}>
            <ScrollView>
                <Header />
                <Searcher />
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