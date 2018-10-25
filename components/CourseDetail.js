import React from 'react';
import { Text, ImageBackground, Button } from 'react-native';
import Card from './Card';
import { withRouter } from 'react-router-native';

const CourseDetail = (props) => {
    return (
        <Card>
            <ImageBackground
            source={{uri: props.course.images[0]}}
            style={styles.imgBackground}
            imageStyle={{resizeMode:"stretch"}}
            >
                <Text style={styles.textStyle}>{props.course.title}</Text>
                <Button title="Details" onPress={() => props.history.push("/course", {id: props.course.id})}/>
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

export default withRouter(CourseDetail);