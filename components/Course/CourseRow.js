import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { withRouter } from 'react-router-native';
import PropTypes from 'prop-types';
import Course from 'mspnmodel/distribution/course/course';
import styles from '../../styles/CourseRow.js';

//:TODO: This is just for starters.

const CourseRow = (props) => {
    return (
        <View>
            <View style = {{flex:1, flexDirection: 'row'}}>
                <View>
                    <Image source={{uri: props.course.images[0]}} style={styles.image}/>
                </View>
                <View style = {{flex:1}}>
                    <TouchableOpacity onPress={() => props.history.push("/course", {id: props.course.id})} >
                        <Text>{props.course.title}</Text>
                    </TouchableOpacity>
                    <Text>{props.course.rating}</Text>
                    <Text>${props.course.price}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => props.history.push("/course", {id: props.course.id})} >
                <Text>Details</Text>
            </TouchableOpacity>
            
        </View>
    );
};

CourseRow.propTypes = {
    course: PropTypes.objectOf(Course),
};

export default withRouter(CourseRow);
