import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class CourseList extends React.Component{
    state = { courses : [] };
// return fetch('https://jsonplaceholder.typicode.com/todos/1')
       
    componentDidMount() {
        //  return fetch('https://bonzo.brainsplode.com:4001/mspnapi/course')
        // return fetch('https://swapi.co/api/people')
        return fetch('https://mspnapi.dolehesten.org/mspnapi/course')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("This is responseJson: "+ responseJson)
            this.setState({
                courses: responseJson
            }, function() {

            });
        })
        .catch((error) => console.log(error))
    }
    renderCourses() {
        return this.state.courses.map((course, index) => <Text key={index}>{course.title}</Text>
        )
        
        // return <Text>{this.state.courses.title}</Text>
    }

    render () {
        console.log(this.state)
        return (
            <View>
                {this.renderCourses()}
            </View>
        )
    }

    // styles = StyleSheet.create({
    //     boxes: {
    //         flex: 1,
    //         flexDirection: 'column',
    //         justifyContent: 'space-evenly',
    //         height: 60,
    //         width: 60,
    //         backgroundColor: 'blue',
    //         borderColor: 'black',
    //         borderStyle: 'solid'
    //     }
    // })
}

export default CourseList;