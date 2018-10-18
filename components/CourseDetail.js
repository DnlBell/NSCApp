import React from 'react';
import { Text, ImageBackground } from 'react-native';
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
            </ImageBackground>
            
        </Card>
    )

}

const styles = {
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    textStyle: {
        backgroundColor: '#FF6622',
        textAlignVertical: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        color: '#fff',
        fontSize: 18
    }
}

export default CourseDetail