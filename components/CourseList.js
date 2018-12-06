import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import CourseDetail from './CourseDetail';
import urls from '../constants/urls';
import "isomorphic-fetch";

const { width } = Dimensions.get('window');
const height = width * 0.8


class CourseList extends PureComponent{
    state = { courses : [] };
       
    componentDidMount() {
        return fetch(`${urls.mspnApiRoot}/course`)
        .then((response) => response.json())
        .then((responseJson) => {
            // console.log("This is responseJson: "+ responseJson)
            this.setState({
                courses: responseJson
            }, function() {

            });
        })
        .catch((error) => console.log(error))
    }
    renderCourses() {
        //remove index from map and change key={index} to key={course.id} when real api is implemented
        return this.state.courses.map((course, index) => 
        <CourseDetail key={index} course={course}  />
        )
    }

    render () {
        // console.log(this.state)
        if(this.state.courses && this.state.courses.length){
            return (
                <View style={this.styles.scrollContainer}>
                    <ScrollView
                    horizontal
                    // pagingEnabled
                    showsHorizontalScrollIndicator={true}>
                    {this.renderCourses()}
                    </ScrollView>
                </View>
            )
        }
        console.log('Please provide courses');
        return null;
    }

    styles = StyleSheet.create({
        scrollContainer: {
            height,
            width
        },
    })
}

export default CourseList;