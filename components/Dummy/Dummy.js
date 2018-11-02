
import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

const Dummy = (props) =>
    <View>
        <Text>Path: {props.path}</Text>
        <Text>Dummy Component</Text>

        <Link to="/" underlayColor="#f0f4f7" >
            <View >
                <Text>Home</Text>
            </View>
        </Link>
    </View>
;

export default Dummy;
