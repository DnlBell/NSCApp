import React, {Component} from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import { withRouter } from 'react-router-native';
import Footer from '../components/Footer';

class Course extends Component{
    state = {course : {}};

    componentDidMount(){
        return fetch('https://mspnapi.dolehesten.org/mspnapi/course/'+this.props.location.state.id)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                course: responseJson
            }, function() {

            });
        })
        .catch((error) => console.log(error))
    }

    render() {
        return (
            <View style= {{flex:1}}>
                <ScrollView >
                    <Text>Course Page!</Text>
                    <Text>Course Title: {this.state.course.title}</Text>
                    <Text>Vendor: {this.state.course.vendorName}</Text>
                    <Button title="Home" onPress={() => this.props.history.push("/")}/>
                </ScrollView>
                    <Footer />
            </View>
        )
    }

}

// const CoursePage = (props) => {
//     return (
//         <View style={styles.pageContainer}>
//             <Text>Course Page!</Text>
//             <Text>{JSON.stringify(props.location.state)}</Text>
//             <Button title="Home" onPress={() => props.history.push("/")}/>
//         </View>
//     )

// }

const styles = {
    pageContainer: {
       flex:1
    }
}

export default withRouter(Course);