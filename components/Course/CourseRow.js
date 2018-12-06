import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { withRouter } from 'react-router-native';
import StarRating from 'react-native-star-rating';
import PropTypes from 'prop-types';
import Course from 'mspnmodel/distribution/course/course';
import styles from '../../styles/CourseRow.js';

//:TODO: This is just for starters.
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

const CourseRow = (props) => {
    return (
        <View>
            <View style = {{flex:1, flexDirection: 'row'}}>
                <View>
                    <Image source={{uri: props.course.images[0]}} style={styles.image}/>
                </View>
                <View style = {{flex:1}}>
                    <TouchableOpacity onPress={() => props.history.push("/course", {id: props.course.id})} >
                        <Text style={styles.title}>{props.course.title}</Text>
                    </TouchableOpacity>
                    <View style = {styles.starFrame}>
                        <StarRating 
                            disabled={true}
                            starSize= {15}
                            maxStars={5}
                            rating={props.course.rating}
                        />
                    </View>
                    <Text style={styles.price}>${insert(props.course.price.toString(), props.course.price.toString().length - 2,'.')}</Text>
                </View>
            </View>
            <Text style={styles.description}>{props.course.description}</Text>
            <TouchableOpacity testID={'CourseRow'} style={styles.details} onPress={() => props.history.push("/course", {id: props.course.id})} >
                <Text style={styles.detailsText}>View details</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
        </View>
    );
};

CourseRow.propTypes = {
    course: PropTypes.objectOf(Course),
};

export default withRouter(CourseRow);
