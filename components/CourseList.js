import React, { PureComponent } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

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
        return this.state.courses.map((course, index) => <Text key={index} style={this.styles.boxes}>{course.title}</Text>
        )
    }

    render () {
        // console.log(this.state)
        if(this.state.courses && this.state.courses.length){
            return (
                <View style={this.styles.scrollContainer}>
                    <ScrollView
                    horizontal
                    pagingEnabled
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
        },
        boxes: {
            width,
            height
            // flex: 1,
            // flexDirection: 'column',
            // justifyContent: 'space-evenly',
            // height: 60,
            // width: 60,
            // backgroundColor: 'blue',
            // borderColor: 'black',
            // borderStyle: 'solid'
        }
    })
}

export default CourseList;