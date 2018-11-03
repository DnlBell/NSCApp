import React, {Component} from 'react';
import { View, ScrollView, Text, Button } from 'react-native';

class ResultsList extends Component {

    state = { 
        courses : [] 
    };

    ComponentDidMount() {
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

}
export default ResultsList;