import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import CourseDetail from './CourseDetail';

const { width } = Dimensions.get('window');
const height = width * 0.8


class CourseList extends PureComponent{
    state = { courses : [] };
       
    componentDidMount() {
        return fetch('https://mspnapi.dolehesten.org/mspnapi/course')
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
        return this.state.courses.map((course) => 
        <CourseDetail key={course.id} course={course}  />
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