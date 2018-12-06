import React from 'react';
import { Text, ImageBackground, Button } from 'react-native';
import { withRouter } from 'react-router-native';

import styles from '../styles/CourseDetail'
import Card from './Card';

const CourseDetail = (props) => {
    return (
        <Card>
            <ImageBackground
            source={{uri: props.course.images[0]}}
            style={styles.imgBackground}
            imageStyle={{resizeMode:"stretch"}}
            >
                <Text style={styles.textStyle}>{props.course.title}</Text>
                <Button title="Details" testID={'CourseDetail'} style = {styles.detailsButton} onPress={() => props.history.push("/course", {id: props.course.id})}/>
            </ImageBackground>
        </Card>
    )

}

export default withRouter(CourseDetail);