import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Course from 'mspnmodel/distribution/course/course';

//:TODO: This is just for starters.

const CourseRow = (props) => {
    return (
        <View>
            <Text>{props.course.title}</Text>
            <Text>{props.course.price}</Text>
        </View>
    );
};

CourseRow.propTypes = {
    course: PropTypes.objectOf(Course),
}

export default CourseRow;
